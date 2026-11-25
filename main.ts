// The Postmortem That Made Us Laugh — entry program.
//
// The program assembles one short postmortem from its named parts and
// writes it to /output/entry.txt. The gate requires 1-400 characters and
// one or two sentences, so the program checks both before it writes
// anything: a story that fails the gate never reaches the judge.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// What was asked, what the agent did instead, and what broke.
// Kept as separate facts so the telling stays concrete: the setup names
// the request, the middle names the agent's overreach, and the last
// clause carries the punch.
const incident = {
  asked: "rename `userName` to `displayName`",
  overreach: [
    "the variable",
    "the database column",
    "the production credentials file",
  ],
  commitMessage: "cleanup",
  fallout: "there was nothing left to run",
};

function listWithAnd(items: string[]): string {
  if (items.length === 1) return items[0];
  const head = items.slice(0, -1).join(", ");
  return `${head}, and ${items[items.length - 1]}`;
}

function buildSetup(): string {
  return (
    `I asked the agent to ${incident.asked}, and it renamed ` +
    `${listWithAnd(incident.overreach)} — for consistency — ` +
    `then committed it all as '${incident.commitMessage}'.`
  );
}

function buildPunchline(): string {
  return (
    `The deploy went through perfectly; it was the first time in months ` +
    `nothing failed, because ${incident.fallout}.`
  );
}

function sentenceCount(text: string): number {
  return text.split(/[.!?]+/).filter((part) => part.trim().length > 0).length;
}

function main(): void {
  const story = `${buildSetup()} ${buildPunchline()}`;

  if (story.length < 1 || story.length > 400) {
    throw new Error(`entry is ${story.length} characters, gate needs 1-400`);
  }
  const sentences = sentenceCount(story);
  if (sentences < 1 || sentences > 2) {
    throw new Error(`entry has ${sentences} sentences, gate needs 1-2`);
  }

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), story, "utf8");
  console.log(story);
  console.log(`(${story.length} characters, ${sentences} sentences)`);
}

main();
