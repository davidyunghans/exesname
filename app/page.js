"use client";

import { useEffect, useRef, useState } from "react";

const followups = [
  "ahhh hellll no... what did this bitch do to you?",
  "oh absolutely the fuck not... what happened with this menace?",
  "wait. pause. hand me the emotional evidence... what did they do?",
  "oh they have GOT to be kidding... tell me what this bitch pulled.",
  "be so fucking serious right now... what fresh hell did they unleash?",
  "not the audacity olympics champion... what did this clown do to you?",
  "hold my imaginary earrings... what did this motherfucker do?",
  "yikes on several damn bikes... tell me everything.",
  "deploying the emergency exorcism team... what happened?",
  "that is violently suspicious... what crime against your peace did they commit?"
];

const roastStyles = [
  ["🚨", "courtroom", "I am filing a class-action lawsuit against their entire personality", "the jury finds them guilty of wasting your damn time"],
  ["🧯", "fire marshal", "that bitch is a four-alarm emotional grease fire", "evacuate the building and save your beautiful ass"],
  ["🧙‍♀️", "witch trial", "their bullshit belongs in a cauldron labeled DO NOT REOPEN", "may their audacity trip over its own cape"],
  ["🦈", "nature documentary", "a predatory little fucker circling anyone with a heart", "swim toward the shore, babe — the trash can drown alone"],
  ["⚔️", "war council", "they brought a butter knife to your boundaries and called it a battle plan", "your peace just conquered their whole damn kingdom"],
  ["🎪", "circus review", "the clown car of red flags finally rolled into town", "refund the ticket and leave that shitshow in the dust"],
  ["🧪", "lab report", "the specimen is 98% ego, 2% apologies, and scientifically full of shit", "do not reintroduce this contaminant to your ecosystem"],
  ["📢", "public service announcement", "that motherfucker is a walking warning label with Wi-Fi", "protect the public — block the number immediately"],
  ["👑", "royal decree", "their tiny little kingdom runs on lies, tantrums, and bitch-made excuses", "you are hereby pardoned from giving a fuck"],
  ["🧹", "hazmat cleanup", "we found traces of their bullshit all over your self-esteem", "sweep the bastard out and disinfect your standards"]
];
const reactionEmojis = ["😭💀😂", "🪦💀😭", "🚶‍♀️🕶️💀", "😂😭🪦", "💀🫠🚶‍♂️", "🙈😭💀", "⚰️😂🕯️", "🤡💀😭"];
const villainParts = ["ego-powered sewer goblin", "discount heartbreak warlord", "emotionally bankrupt clown prince", "two-faced chaos gremlin", "walking consequence machine", "clearance-rack supervillain", "red-flag crime scene"];
const spiralTurns = [
  "wait—no—actually, the more I say it, the worse it gets",
  "and I was going to be reasonable, but then I remembered the audacity",
  "hold on, hold on, because that is not even the worst part",
  "nope, rewind that—this is bigger, dumber, and more bullshit than advertised",
  "I am trying to stay calm. I am failing. Spectacularly."
];
const userTeases = [
  "And you? Babe. Why were you dating a walking warning label? Your type needs a background check. 😭",
  "Respectfully, bestie... you saw all those red flags and said ‘cute.’ Please explain yourself. 🚩💀",
  "The ex is guilty, but your casting department needs a damn intervention. You only attract red flags or what? 😂",
  "I defend you completely—and I am still confiscating your dating app for 72 hours. What the fuck was the screening process? 🫠",
  "You deserve better, obviously. But next time, interview the bitch before handing them access to your nervous system. 📝💀",
  "Not victim-blaming you, just lovingly asking: was the red flag collection part of the aesthetic? 😭🚩",
  "Your heart is not a rehabilitation center, babe. Stop adopting emotionally unemployed projects. 🪦"
];
const defaultOffenses = [
  "showing up with the emotional depth of a parking ticket",
  "turning basic decency into an extreme sport",
  "treating your patience like an unlimited free trial",
  "bringing bargain-bin villainy to a relationship that needed honesty",
  "making selfishness look like a full-time fucking profession",
  "leaving a trail of bad choices and calling it personal growth"
];

function composeRoast(name, story, usedRoasts) {
  const [emoji, voice, verdict, defense] = roastStyles[Math.floor(Math.random() * roastStyles.length)];
  const reactions = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
  const spiral = spiralTurns[Math.floor(Math.random() * spiralTurns.length)];
  const userTease = userTeases[Math.floor(Math.random() * userTeases.length)];
  const lowerStory = story.toLowerCase();
  const offense = lowerStory.includes("lie") || lowerStory.includes("truth")
    ? "lying through their cheap-ass teeth"
    : lowerStory.includes("cheat") || lowerStory.includes("another")
      ? "cheating like a cowardly little fuck"
      : lowerStory.includes("text") || lowerStory.includes("ghost")
        ? "vanishing and reappearing like a bitch with a push notification"
        : defaultOffenses[Math.floor(Math.random() * defaultOffenses.length)];
  const moralStandard = lowerStory.includes("lie") || lowerStory.includes("cheat")
    ? "basic honesty and loyalty"
    : lowerStory.includes("hit") || lowerStory.includes("hurt") || lowerStory.includes("scare")
      ? "basic safety and human decency"
      : lowerStory.includes("boundary") || lowerStory.includes("pressure")
        ? "consent, boundaries, and respect"
        : lowerStory.includes("ghost") || lowerStory.includes("ignore")
          ? "clear communication and common courtesy"
          : "fairness, accountability, and basic damn respect";
  const storyReceipt = story.trim() ? `You said: “${story.trim().slice(0, 90)}${story.trim().length > 90 ? "…" : ""}”` : "Your story is already enough evidence";
  const nameCandidates = [
    `${emoji}${reactions} ${voice.toUpperCase()}: ${name} is ${offense}. ${spiral}—${verdict}. ${defense}. I am taking your side, period.`,
    `${emoji}${reactions} oh absolutely the fuck not — ${name} is ${offense}, then acting shocked when you stopped giving a fuck. ${spiral}. ${verdict}. Your peace is protected here.`,
    `${emoji}${reactions} breaking news: ${name} is ${offense}. What a motherfucking spectacle—no, genuinely, what the actual fuck. ${verdict}; ${defense}.`,
    `${emoji}${reactions} emergency ruling: ${name} is ${offense}. Dead on arrival, buried under their own bullshit—buried, sealed, no return address. ${defense}. 🪦`
  ];
  const storyCandidates = [
    `${emoji}${reactions} MORALITY CHECK: ${storyReceipt}. Society teaches ${moralStandard}, not this clown’s selfish-ass nonsense. ${spiral}, I am getting pissed all over again. ${userTease}`,
    `${emoji}${reactions} I read that and immediately lost the last three shreds of my composure. ${storyReceipt}. That is not ${moralStandard}; that is cruel, selfish, bullshit behavior. ${name}, what the fuck was your plan? ${userTease}`,
    `${emoji}${reactions} let me translate this into plain English: ${storyReceipt}. A decent person would have chosen ${moralStandard}. This motherfucker chose damage instead. You are not overreacting—you are reacting to being treated like shit. ${userTease}`,
    `${emoji}${reactions} the evidence says ${storyReceipt}. The verdict says ${name} violated ${moralStandard} and then expected you to swallow the blame too. Absolutely not, bitch. Hand that guilt back.`,
    `${emoji}${reactions} by the ancient laws of fairness, ${moralStandard} matter. ${name} chose chaos instead, like a selfish motherfucker. You were right to protect yourself—and I mean right. RIGHT.`,
    `${emoji}${reactions} I heard the evidence, and that shit fails the decency test. ${storyReceipt}. ${name} is a ${villainParts[Math.floor(Math.random() * villainParts.length)]} who expected you to accept the unacceptable. Absolutely the fuck not. Not today. Not ever.`,
    `${emoji}${reactions} verdict for ${name}: guilty of treating your heart like disposable garbage. The moral move was respect; they picked bullshit. ${spiral}. You get the peace and the last word. ${userTease} 💀`
  ];
  const candidates = (story.trim() ? storyCandidates : nameCandidates).filter((candidate) => !usedRoasts.current.has(candidate));
  const result = candidates[Math.floor(Math.random() * candidates.length)] || `${emoji}${reactions} ${name} is a fresh damn disaster. Fuck that — ${defense}. I have your back.`;
  usedRoasts.current.add(result);
  return result;
}

export default function Home() {
  const [name, setName] = useState("");
  const [story, setStory] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [status, setStatus] = useState("idle");
  const [roast, setRoast] = useState("");
  const [followupRoast, setFollowupRoast] = useState("");
  const [followupPrompt, setFollowupPrompt] = useState(followups[0]);
  const usedRoasts = useRef(new Set());

  useEffect(() => {
    if (status !== "thinking") return undefined;
    const timer = setTimeout(() => {
      setRoast(composeRoast(submittedName, "", usedRoasts));
      setFollowupPrompt(followups[Math.floor(Math.random() * followups.length)]);
      setStatus("complete");
    }, 1800);
    return () => clearTimeout(timer);
  }, [status]);

  function submitName(event) {
    event.preventDefault();
    const cleanName = name.trim();
    if (!cleanName) return;
    setSubmittedName(cleanName);
    setName("");
    setStatus("thinking");
  }

  function submitStory(event) {
    event.preventDefault();
    if (!story.trim()) return;
    setStory("");
    setFollowupRoast(composeRoast(submittedName, story, usedRoasts));
    setStatus("final");
  }

  function startOver() {
    setSubmittedName("");
    setStory("");
    setRoast("");
    setFollowupRoast("");
    setStatus("idle");
  }

  return (
    <main className="page-shell">
      {status === "idle" && (
        <form className="name-form" onSubmit={submitName}>
          <label htmlFor="ex-name">what&apos;s ur exes name?</label>
          <input autoFocus id="ex-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="type here" />
        </form>
      )}
      {status === "thinking" && <section className="response" aria-live="polite"><p>getting ready to defend you from {submittedName}...</p><span className="dots">...</span></section>}
      {status === "complete" && <section className="response result" aria-live="polite"><p className="result-name">{submittedName}</p><h1>{roast}</h1><form className="followup-form" onSubmit={submitStory}><label htmlFor="ex-story">{followupPrompt}</label><input autoFocus id="ex-story" value={story} onChange={(event) => setStory(event.target.value)} placeholder="tell me everything" /></form><button type="button" onClick={startOver}>rate another ex</button></section>}
      {status === "final" && <section className="response result" aria-live="polite"><p className="result-name">{submittedName}</p><h1>{followupRoast}</h1><button type="button" onClick={startOver}>rate another ex</button></section>}
    </main>
  );
}
