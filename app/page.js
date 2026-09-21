"use client";

import { useEffect, useState } from "react";

const roasts = [
  "A manipulative little shit in a human costume, leaving wreckage everywhere and calling it a personality.",
  "The villain of every story they tell, somehow still convinced they are the hero. What a fucking clown.",
  "A full-time emotional terrorist with the charm of a parking ticket and the self-awareness of a brick.",
  "A selfish, lying disaster who treats accountability like it is a contagious disease.",
  "The kind of asshole who sets the house on fire, blames the smoke, then asks why nobody applauded.",
  "A low-budget supervillain powered entirely by ego, bad decisions, and an absolutely criminal lack of remorse.",
  "A walking red flag with the emotional range of a damp sock and the audacity of a fucking monarch.",
  "Proof that some people do not need a redemption arc. They need a consequence and a long timeout from everyone."
];

export default function Home() {
  const [name, setName] = useState("");
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
    setStatus("thinking");
  }

  function startOver() {
    setSubmittedName("");
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
      {status === "thinking" && <section className="response" aria-live="polite"><p>thinking about {submittedName}...</p><span className="dots">...</span></section>}
      {status === "complete" && <section className="response result" aria-live="polite"><p className="result-name">{submittedName}</p><h1>{roast}</h1><button type="button" onClick={startOver}>rate another ex</button></section>}
    </main>
  );
}
