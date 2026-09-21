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

const curseWords = ["fuck", "fucker", "bitch", "shit", "asshole", "motherfucker", "damn", "puta madre"];
const villainParts = [
  "ego-powered sewer goblin",
  "discount heartbreak warlord",
  "emotionally bankrupt clown prince",
  "two-faced chaos gremlin",
  "walking consequence machine",
  "clearance-rack supervillain",
  "red-flag crime scene"
];

function composeRoast(name, story, usedRoasts) {
  const curse = curseWords[Math.floor(Math.random() * curseWords.length)];
  const villain = villainParts[Math.floor(Math.random() * villainParts.length)];
  const angle = story.toLowerCase().includes("lie")
    ? "lying like a cheap damn politician"
    : story.toLowerCase().includes("cheat")
      ? "cheating like a cowardly fucking amateur"
      : "weaponizing their bullshit like it is a full-time job";
  const candidates = [
    `${name} is a ${curse}-powered ${villain}, ${angle}. What a ${curse}ing embarrassment. You escaped that shitshow.`,
    `Ahhh, ${curse} no. That ${villain} really thought their ${curse} behavior was a personality. Fuck that noise — you deserved peace.`,
    `Verdict: ${name} is a certified ${curse}ing menace, a ${villain} with the audacity of a damn king. Bitch, exile them from your life.`,
    `This ${curse}er brought ${angle}, then expected you to call it love. Absolutely ${curse}ing not. Your glow-up is their consequence.`,
    `Puta madre, ${name} is a ${villain} assembled from bad choices, cheap excuses, and motherfucking audacity. Delete, block, bless the silence.`
  ].filter((candidate) => !usedRoasts.current.has(candidate));
  const result = candidates[Math.floor(Math.random() * candidates.length)] || `${name} is a ${curse}ing disaster. Fuck that — you are free now.`;
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
