"use client";

import { useState } from "react";

const roastLines = [
  "A walking red flag with the emotional range of a damp sock.",
  "The human equivalent of a group chat nobody wants to open.",
  "A full-time disappointment with a part-time personality.",
  "Proof that confidence and competence are not the same damn thing.",
  "A low-budget villain whose biggest plot twist was having no plot.",
  "The reason your standards needed a software update.",
  "An unpaid internship in bad decisions, dressed like a person.",
  "A spectacularly mediocre excuse for a text notification."
];

const titleLines = [
  "The Bare Minimum Bandit",
  "Captain Never-Gonna-Change",
  "The Audacity in Human Form",
  "Lord of the Emotional Damage",
  "The Walking Ick",
  "CEO of Making It Weird"
];

export default function Home() {
  const [name, setName] = useState("");
  const [roast, setRoast] = useState({ title: titleLines[0], line: roastLines[0] });

  function generateName(event) {
    event.preventDefault();
    setRoast({
      title: titleLines[Math.floor(Math.random() * titleLines.length)],
      line: roastLines[Math.floor(Math.random() * roastLines.length)]
    });
  }

  return (
    <main className="page-shell">
      <nav className="nav"><span className="logo">RYE<span>_</span></span><span className="nav-note">A tiny tool for big feelings</span></nav>
      <section className="hero">
        <p className="eyebrow">Welcome to the ex-files</p>
        <h1>Let the roast<br /><em>begin.</em></h1>
        <p className="intro">Name the ex. The agent handles the emotional damage. No slurs, just precision-guided disrespect.</p>
        <form onSubmit={generateName} className="name-form">
          <label htmlFor="ex-name">What was their first name?</label>
          <div className="input-row">
            <input id="ex-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Type their name..." />
            <button type="submit">Roast them <span>→</span></button>
          </div>
        </form>
        <div className="result-card" aria-live="polite">
          <span className="result-label">The roast agent declares</span>
          <strong>{name ? `${name}: ${roast.title}` : roast.title}</strong>
          <p className="roast-line">{roast.line}</p>
          <span className="result-spark">✦</span>
        </div>
      </section>
      <footer><span>For entertainment purposes only.</span><span>Made with questionable judgment.</span></footer>
    </main>
  );
}
