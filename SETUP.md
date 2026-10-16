# Automatic collection: setup (once, about 5 minutes)

The page sends each annotator's answers to a Google Form in your account. A plain form needs no script and no
authorisation, so Google shows no "unverified app" warning. Until a form is configured, the page behaves as before
(download at the end).

1. Go to https://forms.new and create a form with three questions, in this order:
   1. `Name` (Short answer)
   2. `Answers` (Paragraph)
   3. `Status` (Short answer)
2. Settings: turn **off** "Collect email addresses", "Limit to 1 response" and any "Restrict to users in ..." option,
   so friends need no Google login (otherwise the sends are rejected).
3. Click the three dots (top right) > **Get pre-filled link**, type `x` into all three questions, click **Get link**
   and copy it. It looks like
   `https://docs.google.com/forms/d/e/<ID>/viewform?usp=pp_url&entry.123=x&entry.456=x&entry.789=x`.
4. Paste it into `index.html`: `var FORM_LINK = "<the link>";` then commit and push.
5. Test: open the live page, type the name `test`, answer 10 questions. A response with status `progress 10/150`
   appears in the form's Responses tab within seconds.

## Getting the labels

Responses tab > three dots > **Download responses (.csv)**, put the file in this project, then

    python annotation_site/from_form.py <responses.csv> labels/
    cd public-release-staging && python scripts/argument_judge.py agreement figures/arg_human_A.csv ../labels/labels_*.csv

Every person appears several times (one response per 10 answers); `from_form.py` keeps their most complete one.
Responses named `test` or `test-...` (such as the setup check `test-setup`) are skipped, so they never reach the
agreement numbers; you can still delete them from the Responses tab.
