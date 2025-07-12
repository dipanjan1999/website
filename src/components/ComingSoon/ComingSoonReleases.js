import React from 'react';
import './ComingSoonReleases.css';

const tools = [
  {
    name: 'Something Cool',
    desc: 'Yeah! You will be amazed.',
  },
  {
    name: 'New Tools',
    desc: 'Things are easier this way.',
  },
  {
    name: 'Surprise!!!',
    desc: 'Stay Tuned',
  },
];

const ComingSoonReleases = () => {
  return (
    <main className="coming-soon-container">
      <h1 className="coming-title">⌛ Coming Soon: Public Deployments</h1>
      <p className="coming-subtitle">
        A curated set of tools and systems born from code, innovation, and research — currently being finalized for public access.
      </p>

      <div className="tool-grid">
        {tools.map((tool, idx) => (
          <div className="tool-card" key={idx}>
            <h2 className="tool-name">{tool.name}</h2>
            <p className="tool-desc">{tool.desc}</p>
            <span className="tool-status">Coming Soon</span>
          </div>
        ))}
      </div>

      <div className="notify-section">
        <p className="notify-text">Be the first to get access when we launch:</p>
        <div className="notify-form">
          <input type="email" placeholder="Enter your email" className="notify-input" />
          <button className="notify-button">Notify Me</button>
        </div>
      </div>
    </main>
  );
};

export default ComingSoonReleases;
