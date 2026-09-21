"use client";

import { useState } from "react";

const suggestions = ["The One Who Texts Back", "Mr. Almost", "The Plot Twist"];

export default function Home() {
  const [name, setName] = useState("");
  const [suggestion, setSuggestion] = useState(suggestions[0]);

  function generateName(event) {
    event.preventDefault();
    setSuggestion(suggestions[Math.floor(Math.random() * suggestions.length)]);
  }

  return (
    <main className="page-shell">
      <nav className="nav"><span className="logo">RYE<span>_</span></span><span className="nav-note">A tiny tool for big feelings</span></nav>
      <section className="hero">
        <p className="eyebrow">Welcome to the ex-files</p>
        <h1>Give your ex<br /><em>a name.</em></h1>
        <p className="intro">Because “that one person” is not nearly specific enough.</p>
        <form onSubmit={generateName} className="name-form">
          <label htmlFor="ex-name">What was their first name?</label>
          <div className="input-row">
            <input id="ex-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Type a name..." />
            <button type="submit">Rate them <span>→</span></button>
          </div>
        </form>
        <div className="result-card" aria-live="polite">
          <span className="result-label">Their official title</span>
          <strong>{name ? `${name}: ${suggestion}` : suggestion}</strong>
          <span className="result-spark">✦</span>
        </div>
      </section>
      <footer><span>For entertainment purposes only.</span><span>Made with questionable judgment.</span></footer>
    </main>
  );
}
