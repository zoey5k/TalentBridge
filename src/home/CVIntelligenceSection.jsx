import { useNavigate } from "react-router-dom";

export default function CVIntelligenceSection({ t }) {
  const candidates = [
    { name: "Sarah Ahmed", role: "Senior Software Engineer", score: 94, matched: true },
    { name: "Mohamed Ali", role: "Frontend Developer", score: 87, matched: true },
    { name: "Nour Hassan", role: "Full Stack Developer", score: 76, matched: true },
    { name: "Karim Youssef", role: "Backend Developer", score: 62, matched: false },
  ];

  return (
    <section className="section cv-intelligence-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-badge">{t.cvTitle}</span>
          <h2>{t.cvSubtitle}</h2>
          <p>{t.cvDescription}</p>
        </div>

        <div className="cv-intelligence-grid">
          <div className="cv-intelligence-visual">
            <div className="cv-mockup">
              <div className="cv-mockup-header">
                <div className="cv-mockup-dot" />
                <div className="cv-mockup-dot" />
                <div className="cv-mockup-dot" />
              </div>
              <div className="cv-mockup-body">
                <div className="cv-match-score">
                  <div className="cv-score-ring">
                    <svg viewBox="0 0 120 120" className="cv-score-svg">
                      <circle cx="60" cy="60" r="52" fill="none" stroke="var(--border)" strokeWidth="8" />
                      <circle
                        cx="60" cy="60" r="52"
                        fill="none" stroke="#2563EB"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 52}`}
                        strokeDashoffset={`${2 * Math.PI * 52 * (1 - 0.88)}`}
                        transform="rotate(-90 60 60)"
                        className="cv-score-arc"
                      />
                    </svg>
                    <div className="cv-score-center">
                      <span className="cv-score-number">88</span>
                      <span className="cv-score-label">Match</span>
                    </div>
                  </div>
                </div>
                <div className="cv-match-details">
                  <div className="cv-match-bar">
                    <span className="cv-match-label">Skills Match</span>
                    <div className="cv-bar-track">
                      <div className="cv-bar-fill" style={{ width: "92%" }} />
                    </div>
                    <span className="cv-match-value">92%</span>
                  </div>
                  <div className="cv-match-bar">
                    <span className="cv-match-label">Experience</span>
                    <div className="cv-bar-track">
                      <div className="cv-bar-fill" style={{ width: "85%" }} />
                    </div>
                    <span className="cv-match-value">85%</span>
                  </div>
                  <div className="cv-match-bar">
                    <span className="cv-match-label">Education</span>
                    <div className="cv-bar-track">
                      <div className="cv-bar-fill" style={{ width: "78%" }} />
                    </div>
                    <span className="cv-match-value">78%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cv-intelligence-rankings">
            <div className="cv-ranking-header">
              <h4>{t.cvRank}</h4>
            </div>
            <div className="cv-ranking-list">
              {candidates.map((candidate, index) => (
                <div key={index} className={`cv-ranking-item ${candidate.matched ? "matched" : ""}`}>
                  <div className="cv-ranking-avatar">
                    <span>{candidate.name.charAt(0)}</span>
                  </div>
                  <div className="cv-ranking-info">
                    <h5>{candidate.name}</h5>
                    <p>{candidate.role}</p>
                  </div>
                  <div className={`cv-ranking-score ${candidate.score >= 70 ? "high" : "medium"}`}>
                    <span className="cv-ranking-number">{candidate.score}%</span>
                    {candidate.matched && <div className="cv-match-indicator" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}