# Analysis plan for the tool-argument labels

Written on 16 October 2026, before any label from the public page was collected. Implemented in `analyse_labels.py`.

## Data

* **Independent annotators:** the first author's first round (`arg_human_A.csv`), the second annotator
  (`labels_Christoffer.csv`) and every participant of the public page (one file per nickname and random code, made by
  `from_form.py` from the form export, keeping each person's most complete response).
* **Not an independent annotator:** the first author's second round (`labels/retest/`); used only for test-retest
  agreement.
* Responses named `test` or `test-...` are setup checks and are dropped.

## Item order on the public page

The 48 items on which the first two annotators gave different labels come first (the 19 on which they disagree on
usable versus incorrect before the other 29), with attention checks at positions 3, 7, 12, 18, 26, 35 and 46; then
the remaining items; the 11 items shown or discussed as examples last. The order within each group is random per
participant. A third label changes the majority only on items where the first two disagree, so short contributions
are spent where they matter. Because participants start with the hardest items, their own label shares are not
comparable to the first two annotators' shares; only the per-item final labels are reported.

## Screening (decided before the data)

* **Attention checks:** the 23 items whose predicted arguments are identical to the reference (after lower-casing and
  removing punctuation), excluding the one shown as an example. The only correct answer is "correct"; both first
  annotators rated all of them "correct".
* A participant is **included** if they answered at least 3 attention checks and rated at least 75% of the answered
  checks "correct". Participants with fewer than 3 answered checks (fewer than about 12 answers) are excluded, so
  every included participant has been checked.
* Attention-check items are not used as evidence in the results (their label is known by construction).

## Final label per item

* **Primary (usable versus incorrect):** usable = correct or partial. The final label is the majority over all
  included independent labels of the item. A tie counts as **not usable** (conservative).
* **Secondary (three classes):** majority over the three classes; a tie is resolved to **partial** (the middle class).

## Reported quantities

* Share of the 150 items whose final label is usable, with a 95% bootstrap confidence interval over items
  (10,000 resamples), compared with the exact-match rate (16%); the same for the three classes.
* Agreement: Krippendorff's alpha (nominal) over all included annotators (it allows missing labels), for the binary
  and the three-class labels; Cohen's kappa for every pair with at least 30 common items.
* Coverage: the number of the 48 disagreement items with at least one label from an included participant.
* Robustness: everything again without the 11 example items.

## Stopping rule

Collection stops when every one of the 19 usable-versus-incorrect disagreement items has at least one label from an
included participant, or on 31 October 2026, whichever comes first. Nothing in this plan is changed after the first
public label arrives; any later deviation is reported as such.
