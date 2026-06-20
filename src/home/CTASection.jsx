import { Briefcase, ArrowRight, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CTASection({ t }) {
  const navigate = useNavigate();

  return (
    <section className="section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-icon">
            <Briefcase size={48} />
          </div>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
          <div className="cta-actions">
            <button
              className="btn-primary btn-glow"
              onClick={() => navigate("/careers")}
            >
              Explore Careers
              <ArrowRight size={18} className="btn-arrow" />
            </button>
            <button
              className="btn-secondary"
              onClick={() => navigate("/about")}
            >
              <Info size={16} />
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}