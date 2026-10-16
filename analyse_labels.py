"""Final labels, screening and agreement for the tool-argument labels, as specified in ANALYSIS_PLAN.md.

    python annotation_site/analyse_labels.py <first author round 1 csv> labels/labels_*.csv [--retest <csv>]

Every csv needs the columns id and label (correct, partial, incorrect); the first file is the first author's first
round. Files named after a 'test' nickname are ignored.
"""
import csv
import io
import random
import re
import sys
from collections import Counter
from itertools import combinations
from pathlib import Path

CHECKS = set("h007 h010 h018 h020 h039 h044 h052 h053 h064 h065 h066 h068 h072 h074 h081 h085 h088 h093 h099 h102 "
             "h118 h143 h145".split())
EXAMPLES = set("h001 h002 h006 h008 h014 h015 h019 h021 h046 h077 h079".split())
CLASSES = ("correct", "partial", "incorrect")


def load(path):
    lines = open(path, encoding="utf-8").read().split("\n")
    while lines and not lines[0].lstrip(",").strip():  # the first-round sheet starts with an empty row
        lines = lines[1:]
    out = {}
    for r in csv.DictReader(io.StringIO("\n".join(lines))):
        lab = (r.get("label") or "").strip().lower()
        lab = {"corect": "correct"}.get(lab, lab)  # one typo in the first-round sheet (h015)
        if r.get("id") and lab in CLASSES:
            out[r["id"]] = lab
    return out


def usable(lab):
    return "usable" if lab in ("correct", "partial") else "incorrect"


def final(labels, binary):
    if binary:
        c = Counter(usable(x) for x in labels)
        return "usable" if c["usable"] > c["incorrect"] else "incorrect"  # tie -> not usable
    c = Counter(labels).most_common()
    if len(c) > 1 and c[0][1] == c[1][1]:
        return "partial"  # tie -> middle class
    return c[0][0]


def kappa(a, b):
    ids = sorted(set(a) & set(b))
    x, y = [a[i] for i in ids], [b[i] for i in ids]
    po = sum(u == v for u, v in zip(x, y)) / len(ids)
    pe = sum((x.count(c) / len(ids)) * (y.count(c) / len(ids)) for c in set(x) | set(y))
    return len(ids), po, (po - pe) / (1 - pe) if pe < 1 else float("nan")


def alpha(raters, ids):
    """Krippendorff's alpha, nominal, from the coincidence matrix; items with fewer than two labels are skipped."""
    pairs, n_c = Counter(), Counter()
    for i in ids:
        vals = [r[i] for r in raters if i in r]
        m = len(vals)
        if m < 2:
            continue
        for u, v in ((u, v) for k, u in enumerate(vals) for j, v in enumerate(vals) if k != j):
            pairs[(u, v)] += 1 / (m - 1)
    for (u, _), w in pairs.items():
        n_c[u] += w
    n = sum(n_c.values())
    if n <= 1:
        return float("nan")
    d_o = sum(w for (u, v), w in pairs.items() if u != v) / n
    d_e = sum(n_c[u] * n_c[v] for u in n_c for v in n_c if u != v) / (n * (n - 1))
    return 1 - d_o / d_e if d_e else float("nan")


def share_ci(flags, rng, reps=10000):
    k = len(flags)
    boot = sorted(sum(flags[rng.randrange(k)] for _ in range(k)) / k for _ in range(reps))
    return sum(flags) / k, boot[int(.025 * reps)], boot[int(.975 * reps) - 1]


def main(argv):
    retest = None
    if "--retest" in argv:
        k = argv.index("--retest")
        retest = argv[k + 1]
        argv = argv[:k] + argv[k + 2:]
    files = [f for f in argv if not re.match(r"labels_test([-_ ]|$)", Path(f).stem.lower())]
    raters = {Path(f).stem.replace("labels_", ""): load(f) for f in files}

    print("## Screening (at least 3 attention checks answered, at least 75% rated correct)")
    included = {}
    for name, lab in raters.items():
        seen = [i for i in lab if i in CHECKS]
        ok = sum(lab[i] == "correct" for i in seen)
        keep = len(seen) >= 3 and ok >= .75 * len(seen)
        print(f"  {name}: {len(lab)} labels, checks {ok}/{len(seen)} correct -> {'included' if keep else 'EXCLUDED'}")
        if keep:
            included[name] = lab
    names = list(included)
    first_two = names[:2]
    a, b = included[first_two[0]], included[first_two[1]]
    disagree = sorted(i for i in set(a) & set(b) if a[i] != b[i] and i not in EXAMPLES)
    disagree_bin = [i for i in disagree if usable(a[i]) != usable(b[i])]
    new = names[2:]
    covered = lambda ids: sum(any(i in included[n] for n in new) for i in ids)
    print(f"\n## Coverage by new participants ({len(new)} included)")
    print(f"  disagreement items with a third label: {covered(disagree)}/{len(disagree)} "
          f"(usable-vs-incorrect: {covered(disagree_bin)}/{len(disagree_bin)})")

    all_ids = sorted(set().union(*included.values()))
    rng = random.Random(0)
    for title, ids in (("all items", [i for i in all_ids if i not in CHECKS]),
                       ("without the 11 example items", [i for i in all_ids if i not in CHECKS | EXAMPLES])):
        print(f"\n## Final labels, {title} (n = {len(ids)}; attention checks excluded)")
        for binary in (True, False):
            fin = {i: final([included[n][i] for n in names if i in included[n]], binary) for i in ids}
            if binary:
                s, lo, hi = share_ci([fin[i] == "usable" for i in ids], rng)
                print(f"  usable: {s:.3f} [{lo:.3f}, {hi:.3f}]")
            else:
                for c in CLASSES:
                    s, lo, hi = share_ci([fin[i] == c for i in ids], rng)
                    print(f"  {c}: {s:.3f} [{lo:.3f}, {hi:.3f}]")
        for binary in (True, False):
            conv = [{i: (usable(v) if binary else v) for i, v in included[n].items()} for n in names]
            print(f"  Krippendorff's alpha ({'usable vs incorrect' if binary else 'three classes'}): {alpha(conv, ids):.3f}")

    print("\n## Pairwise Cohen's kappa (pairs with at least 30 common items, all items)")
    for x, y in combinations(names, 2):
        n, po, k = kappa(included[x], included[y])
        if n >= 30:
            kb = kappa({i: usable(v) for i, v in included[x].items()}, {i: usable(v) for i, v in included[y].items()})
            print(f"  {x} vs {y}: n={n}, three classes agree {po:.2f} kappa {k:.2f}; usable vs incorrect agree {kb[1]:.2f} kappa {kb[2]:.2f}")
    if retest:
        r = load(retest)
        n, po, k = kappa(raters[first_two[0]], r)
        kb = kappa({i: usable(v) for i, v in raters[first_two[0]].items()}, {i: usable(v) for i, v in r.items()})
        print(f"\n## Test-retest ({first_two[0]} vs {Path(retest).stem}): n={n}, three classes agree {po:.2f} "
              f"kappa {k:.2f}; usable vs incorrect agree {kb[1]:.2f} kappa {kb[2]:.2f}")


if __name__ == "__main__":
    main(sys.argv[1:])
