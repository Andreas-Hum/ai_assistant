"""Split the Google Form export of the annotation site into one label file per annotator.

The site sends everyone's cumulative answers after every answer and on every return visit, so a person has many responses; the
most complete one (the latest among equally complete ones) is kept.
Responses named "test" or "test-..." (setup checks) are skipped.

    python annotation_site/from_form.py <responses.csv from Google Forms/Sheets> labels/
"""
import csv
import io
import re
import sys
from pathlib import Path

src, out = Path(sys.argv[1]), Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)
best = {}  # name (lower case) -> (answered, row index, name, csv text)
with open(src, newline="", encoding="utf-8") as f:
    rows = list(csv.reader(f))
for i, row in enumerate(rows[1:]):
    if len(row) < 4:
        continue
    name, text, status = row[1].strip(), row[2], row[3]
    labels = [r for r in csv.DictReader(io.StringIO(text)) if r.get("id") and r.get("label")]
    if not name or not labels or re.match(r"test([-_ ]|$)", name.lower()):  # setup checks, not annotators
        continue
    key = (len(labels), i)
    if name.lower() not in best or key > best[name.lower()][:2]:
        best[name.lower()] = (len(labels), i, name, text)
for n, _, name, text in sorted(best.values(), key=lambda b: b[2].lower()):
    path = out / f"labels_{re.sub(r'[^A-Za-z0-9_-]+', '_', name)}.csv"
    path.write_text(text if text.endswith("\n") else text + "\n", encoding="utf-8")
    print(f"{path}: {n} labels")
