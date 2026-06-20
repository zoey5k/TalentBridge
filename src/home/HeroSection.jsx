import { ArrowRight, Sparkles } from "lucide-react";
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
          rgba(8,15,35,.78),
          rgba(15,23,42,.62),
          rgba(30,78,216,.22)
        ),
        url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "84vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="hero-grid">
          {/* LEFT SIDE */}
          <div className="hero-content">
            {/* BADGE */}
            <div className="hero-badge">
              <Sparkles size={18} />
              {t.recruitment}
            </div>

            {/* TITLE */}
            <h1 className="hero-title">{t.heroTitle}</h1>

            {/* SUBTITLE */}
            <p className="hero-subtitle">{t.heroSubtitle}</p>

            {/* BUTTONS */}
            <div className="hero-actions">
              <button
                className="btn-primary btn-glow"
                onClick={() => navigate("/pricing")}
              >
                {t.getStarted}
                <ArrowRight size={18} className="btn-arrow" />
              </button>
              <button
                className="btn-secondary btn-glass"
                onClick={() => navigate("/about")}
              >
                {t.explore}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}