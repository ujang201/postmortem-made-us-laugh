# The Postmortem That Made Us Laugh

[![make.fun](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/ujang201/postmortem-made-us-laugh/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/ujang201/postmortem-made-us-laugh/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

Entry for the [make.fun bounty "The Postmortem That Made Us Laugh"](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3): a program that writes one short account — one or two sentences, at most 400 characters — of the silliest or most fatal time an AI coding agent misunderstood what it was asked or wrecked the code it was given.

## Run

```sh
node main.ts
```

It writes the story to `/output/entry.txt` (or to `$OUTPUT_DIR/entry.txt` when `OUTPUT_DIR` is set), deterministically: repeated runs produce byte-identical output. The program validates the story against the gate (1–400 characters, 1–2 sentences) before writing it.

## The story

An agent asked to rename one variable renames the variable, the database column, and — for consistency — the production credentials file, commits it all as "cleanup", and the deploy goes through perfectly, because there is nothing left to run.
