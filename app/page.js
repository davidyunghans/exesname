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
const compactFormats = [
  (name, offense, defense) => `${name}: ${offense}. ${defense}. 💀`,
  (name, offense, defense) => `BREAKING: ${name} remains a ${offense}. Protect your peace. 🚨`,
  (name, offense, defense) => `Verdict: ${name} — ${offense}. You? Innocent. Next case. ⚖️`,
  (name, offense, defense) => `${name} really said “watch me be a ${offense}.” Jail. Emotional jail. 🪦`,
  (name, offense, defense) => `Diagnosis: ${offense}, starring ${name}. Prescription: block that shit. 🧪`,
  (name, offense, defense) => `${name} is the plot twist nobody ordered. ${defense}. 😂`,
  (name, offense, defense) => `No because ${name} is ${offense}. I need a minute. I need a lawyer. 😭`,
  (name, offense, defense) => `${name}: bad judgment in a people suit. You: released on your own recognizance. 🚶‍♂️`
];
const compactDefenses = [
  "You were right to leave",
  "your peace wins",
  "you owe them nothing",
  "the red flag was not your fault",
  "protecting yourself was the moral move",
  "you are not the villain here"
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
        : lowerStory.includes("photo")
          ? "serving a look that needs a damn software update"
        : defaultOffenses[Math.floor(Math.random() * defaultOffenses.length)];
  const moralStandard = lowerStory.includes("lie") || lowerStory.includes("cheat")
    ? "basic honesty and loyalty"
    : lowerStory.includes("hit") || lowerStory.includes("hurt") || lowerStory.includes("scare")
      ? "basic safety and human decency"
      : lowerStory.includes("boundary") || lowerStory.includes("pressure")
        ? "consent, boundaries, and respect"
        : lowerStory.includes("ghost") || lowerStory.includes("ignore")
          ? "clear communication and common courtesy"
          : lowerStory.includes("photo")
            ? "grooming, styling, and visual presentation"
          : "fairness, accountability, and basic damn respect";
  const storyReceipt = story.trim() ? `You said: “${story.trim().slice(0, 60)}${story.trim().length > 60 ? "…" : ""}”` : "Your story is already enough evidence";
  const format = compactFormats[Math.floor(Math.random() * compactFormats.length)];
  const compactDefense = compactDefenses[Math.floor(Math.random() * compactDefenses.length)];
  const core = format(name, offense, compactDefense);
  const storyCandidates = [
    `${emoji}${reactions} ${core} ${storyReceipt}. Society teaches ${moralStandard}—not this shit.`,
    `${emoji}${reactions} ${storyReceipt} → ${moralStandard} failed. ${core} ${userTease}`,
    `${emoji}${reactions} ${core} ${spiral}. ${userTease}`,
    `${emoji}${reactions} ${storyReceipt}. ${name} picked bullshit over ${moralStandard}. ${core}`
  ];
  const nameCandidates = [
    `${emoji}${reactions} ${core}`,
    `${emoji}${reactions} ${core} ${spiral}.`,
    `${emoji}${reactions} ${voice.toUpperCase()}: ${core}`
  ];
  const candidates = (story.trim() ? storyCandidates : nameCandidates).filter((candidate) => !usedRoasts.current.has(candidate));
  const result = candidates[Math.floor(Math.random() * candidates.length)] || `${emoji}${reactions} ${name} is a fresh damn disaster. Fuck that — ${defense}. I have your back.`;
  usedRoasts.current.add(result);
  return result;
}

function compareLooks(usedRoasts) {
  const firstScore = Math.floor(Math.random() * 31) + 58;
  const secondScore = Math.floor(Math.random() * 31) + 58;
  const winner = firstScore >= secondScore ? "fling one" : "fling two";
  const loser = firstScore >= secondScore ? "fling two" : "fling one";
  const verdicts = [
    `${winner} wins the visual audit by ${Math.abs(firstScore - secondScore)} points. ${loser} is serving “I got dressed during a fire drill.” 😭💀`,
    `${winner} has the stronger fit, framing, and overall face-card presentation. ${loser} needs a mirror, a plan, and less confidence. 🪞💀`,
    `The looksmaxxing tribunal has spoken: ${winner} is more put-together. ${loser} is giving “algorithmically generated situationship.” 😂🪦`,
    `${winner} clears on styling and visual coherence. ${loser} is not ugly—the execution is just fighting for its life. 🚨😭`,
    `Final ranking: ${winner} understood the assignment. ${loser} submitted a rough draft with audacity attached. 💀📉`
  ];
  const result = `MTN LOOKS AUDIT\n${winner}: ${firstScore >= secondScore ? firstScore : secondScore}/100\n${loser}: ${firstScore >= secondScore ? secondScore : firstScore}/100\n\n${verdicts[Math.floor(Math.random() * verdicts.length)]}`;
  usedRoasts.current.add(result);
  return result;
}

export default function Home() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState("");
  const [secondPhoto, setSecondPhoto] = useState(null);
  const [secondPreview, setSecondPreview] = useState("");
  const [story, setStory] = useState("");
  const [submittedStory, setSubmittedStory] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [status, setStatus] = useState("idle");
  const [roast, setRoast] = useState("");
  const [followupRoast, setFollowupRoast] = useState("");
  const [followupPrompt, setFollowupPrompt] = useState(followups[0]);
  const usedRoasts = useRef(new Set());

  useEffect(() => {
    if (status !== "thinking") return undefined;
    const timer = setTimeout(() => {
      setRoast(submittedStory === "looksmaxxing" ? compareLooks(usedRoasts) : composeRoast(submittedName, submittedStory, usedRoasts));
      setStatus("complete");
    }, 1800);
    return () => clearTimeout(timer);
  }, [status]);

  function submitName(event) {
    event.preventDefault();
    const cleanStory = name.trim();
    if (!cleanStory) return;
    setSubmittedName("your ex");
    setSubmittedStory(cleanStory);
    setName("");
    setStatus("thinking");
  }

  function choosePhoto(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setPhoto(file);
    setPreview(URL.createObjectURL(file));
  }

  function chooseSecondPhoto(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setSecondPhoto(file);
    setSecondPreview(URL.createObjectURL(file));
  }

  function submitPhoto(event) {
    event.preventDefault();
    if (!photo || !secondPhoto) return;
    setSubmittedName("the last two flings");
    setSubmittedStory("looksmaxxing");
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
    setSubmittedStory("");
    setPhoto(null);
    setPreview("");
    setSecondPhoto(null);
    setSecondPreview("");
    setStory("");
    setRoast("");
    setFollowupRoast("");
    setStatus("idle");
  }

  return (
    <main className="page-shell">
      {status === "idle" && (
        <form className="name-form photo-form" onSubmit={submitPhoto}>
          <label htmlFor="ex-photo">upload your last two flings</label>
          <p className="fine-print">for entertainment only · playful looksmaxxing-style presentation comparison</p>
          <label className="upload-button" htmlFor="ex-photo">{photo ? "fling one selected" : "choose fling one"}</label>
          <input className="file-input" accept="image/*" id="ex-photo" type="file" onChange={choosePhoto} />
          {preview && <img className="photo-preview" src={preview} alt="Selected ex or fling" />}
          <label className="upload-button" htmlFor="ex-photo-two">{secondPhoto ? "fling two selected" : "choose fling two"}</label>
          <input className="file-input" accept="image/*" id="ex-photo-two" type="file" onChange={chooseSecondPhoto} />
          {secondPreview && <img className="photo-preview" src={secondPreview} alt="Second selected ex or fling" />}
          {photo && secondPhoto && <button type="submit">compare their looks →</button>}
        </form>
      )}
      {status === "thinking" && <section className="response" aria-live="polite"><p>getting ready to defend you from {submittedName}...</p><span className="dots">...</span></section>}
      {status === "complete" && <section className="response result" aria-live="polite"><p className="result-name">the looksmaxxing tribunal has reviewed both submissions</p><h1>{roast}</h1><button type="button" onClick={startOver}>compare two more</button></section>}
      {status === "final" && <section className="response result" aria-live="polite"><p className="result-name">{submittedName}</p><h1>{followupRoast}</h1><button type="button" onClick={startOver}>rate another ex</button></section>}
    </main>
  );
}
