import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CTASection({ t }) {
  const navigate = useNavigate();

  return (
    <section className="section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaText}</p>
            <div className="cta-actions">
              <button
                className="btn-primary btn-glow"
                onClick={() => navigate("/careers")}
              >
                {t.exploreCareers}
                <ArrowRight size={18} className="btn-arrow" />
              </button>
              <button
                className="btn-secondary"
                onClick={() => navigate("/about")}
              >
                {t.learnMore}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}