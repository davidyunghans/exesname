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

export default function Home() {
  const [name, setName] = useState("");
  const [story, setStory] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [status, setStatus] = useState("idle");
  const [roast, setRoast] = useState("");

  useEffect(() => {
    if (status !== "thinking") return undefined;
    const timer = setTimeout(() => {
      setRoast(roasts[Math.floor(Math.random() * roasts.length)]);
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
    setStatus("followup");
  }

  function submitStory(event) {
    event.preventDefault();
    if (!story.trim()) return;
    setStory("");
    setStatus("thinking");
  }

  function startOver() {
    setSubmittedName("");
    setStory("");
    setRoast("");
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
      {status === "followup" && (
        <form className="name-form" onSubmit={submitStory}>
          <label htmlFor="ex-story">what did this bitch do to you?</label>
          <input autoFocus id="ex-story" value={story} onChange={(event) => setStory(event.target.value)} placeholder="tell me everything" />
        </form>
      )}
      {status === "thinking" && <section className="response" aria-live="polite"><p>getting ready to defend you from {submittedName}...</p><span className="dots">...</span></section>}
      {status === "complete" && <section className="response result" aria-live="polite"><p className="result-name">{submittedName}</p><h1>{roast}</h1><button type="button" onClick={startOver}>rate another ex</button></section>}
    </main>
  );
}
