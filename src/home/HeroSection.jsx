import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/hero-bg.avif";

export default function HeroSection({ t }) {
  const navigate = useNavigate();

  return (
    <section
      className="hero section"
      style={{
        backgroundImage: `linear-gradient(
          135deg,
          rgba(8,15,35,.82),
          rgba(15,23,42,.68),
          rgba(30,78,216,.18)
        ),
        url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "86vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              {t.heroBadge}
            </div>

            <h1 className="hero-title">{t.heroTitle}</h1>

            <p className="hero-subtitle">{t.heroSubtitle}</p>

            <div className="hero-actions">
              <button
                className="btn-primary btn-glow"
                onClick={() => navigate("/pricing")}
              >
                {t.viewPricing}
                <ArrowRight size={18} className="btn-arrow" />
              </button>
              <button
                className="btn-secondary btn-glass"
                onClick={() => navigate("/about")}
              >
                {t.explorePlatform}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}