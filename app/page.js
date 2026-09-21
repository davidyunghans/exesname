"use client";

import { useEffect, useState } from "react";

const roasts = [
  "That motherfucker is a walking red flag with the emotional range of a damp sock. You deserved better than that bullshit.",
  "A manipulative little fucker in a human costume. Bitch, your peace was not their punching bag.",
  "The villain of every story they tell, somehow still convinced they are the hero. What a fucking clown. You escaped; they lost.",
  "A selfish, lying bitch who treats accountability like it is a contagious disease. Que se joda — you owe them nothing.",
  "The kind of asshole who sets the house on fire, blames the smoke, then asks why nobody applauded. What the fuck was that performance?",
  "A low-budget supervillain powered by ego, bad decisions, and zero remorse. Absolute basura with a phone plan.",
  "A certified bitch with the audacity of a monarch and the emotional intelligence of a fucking traffic cone. Block, breathe, thrive.",
  "Puta madre, what an exhausting piece of work. They did not break your standards — they revealed why you needed higher ones.",
  "That fucker brought nothing but chaos, excuses, and a suspicious amount of confidence. Your exit was the plot twist they deserved.",
  "A motherfucking disaster with Wi-Fi. No apology, no closure, no encore — let that bitch perform for somebody else."
];

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

export default function Home() {
  const [name, setName] = useState("");
  const [story, setStory] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [status, setStatus] = useState("idle");
  const [roast, setRoast] = useState("");
  const [followupRoast, setFollowupRoast] = useState("");
  const [followupPrompt, setFollowupPrompt] = useState(followups[0]);

  useEffect(() => {
    if (status !== "thinking") return undefined;
    const timer = setTimeout(() => {
      setRoast(roasts[Math.floor(Math.random() * roasts.length)]);
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
    setFollowupRoast(roasts[Math.floor(Math.random() * roasts.length)]);
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
