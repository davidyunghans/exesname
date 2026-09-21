"use client";

import { useEffect, useState } from "react";

const roasts = [
  "A walking red flag with the emotional range of a damp sock.",
  "The human equivalent of a group chat nobody wants to open.",
  "A full-time disappointment with a part-time personality.",
  "Proof that confidence and competence are not the same damn thing.",
  "A low-budget villain whose biggest plot twist was having no plot.",
  "The reason your standards needed a software update.",
  "An unpaid internship in bad decisions, dressed like a person.",
  "A spectacularly mediocre excuse for a text notification."
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
