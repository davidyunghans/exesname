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

function composeRoast(name, story, usedRoasts) {
  const [emoji, voice, verdict, defense] = roastStyles[Math.floor(Math.random() * roastStyles.length)];
  const reactions = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
  const lowerStory = story.toLowerCase();
  const offense = lowerStory.includes("lie") || lowerStory.includes("truth")
    ? "lying through their cheap-ass teeth"
    : lowerStory.includes("cheat") || lowerStory.includes("another")
      ? "cheating like a cowardly little fuck"
      : lowerStory.includes("text") || lowerStory.includes("ghost")
        ? "vanishing and reappearing like a bitch with a push notification"
        : "weaponizing their bullshit like it is a goddamn career";
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
  const candidates = [
    `${emoji}${reactions} ${voice.toUpperCase()}: ${name} is ${offense}. ${verdict}. ${defense}. I am taking your side, period.`,
    `${emoji}${reactions} ahhh hell no — ${name} is ${offense}, then acting shocked when you stopped giving a fuck. ${verdict}. ${defense}. Your peace is protected here.`,
    `${emoji}${reactions} breaking news: ${name} is ${offense}. What a motherfucking spectacle. ${verdict}; ${defense}. You are not the villain for leaving the wreckage.`,
    `${emoji}${reactions} emergency ruling: ${name} is ${offense}. Dead on arrival, buried under their own bullshit. ${defense}. You walk away; they can haunt somebody else. 🪦`,
    `${emoji}${reactions} MORALITY CHECK: ${storyReceipt}. Society teaches ${moralStandard}, not this clown’s selfish-ass nonsense. ${name}, go sit with your bullshit while I defend the person you hurt.`,
    `${emoji}${reactions} by the ancient laws of fairness, ${moralStandard} matter. ${name} chose chaos instead, like a selfish motherfucker. You were right to protect yourself — their guilt is not yours to carry.`,
    `${emoji}${reactions} I heard the evidence, and that shit fails the decency test. ${name} is a ${villainParts[Math.floor(Math.random() * villainParts.length)]} who expected you to accept the unacceptable. Absolutely the fuck not.`,
    `${emoji}${reactions} verdict for ${name}: guilty of treating your heart like disposable garbage. The moral move was respect; they picked bullshit. You get the apology-free exit, the peace, and the last word. 💀`
  ].filter((candidate) => !usedRoasts.current.has(candidate));
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
