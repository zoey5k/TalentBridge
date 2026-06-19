import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "../assets/hero-bg.avif";

export default function HeroSection({
  t
}) {

  return (

    <section
      className="hero section"
      style={{
        backgroundImage:
          `linear-gradient(
            135deg,
            rgba(8,15,35,.78),
            rgba(15,23,42,.62),
            rgba(30,78,216,.22)
          ),
          url(${heroBg})`,

        backgroundSize:
          "cover",

        backgroundPosition:
          "center",

        backgroundRepeat:
          "no-repeat",

        minHeight:
          "84vh",

        display:
          "flex",

        alignItems:
          "center"
      }}
    >

      <div
        className="container hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns:
            "1.1fr .9fr",

          gap: "50px",

          alignItems:
            "center"
        }}
      >

        {/* LEFT SIDE */}

        <div className="hero-content">

          {/* BADGE */}

          <div
            style={{
              display:
                "inline-flex",

              alignItems:
                "center",

              gap:
                "10px",

              padding:
                "12px 20px",

              borderRadius:
                "999px",

              background:
                "rgba(255,255,255,.08)",

              backdropFilter:
                "blur(18px)",

              border:
                "1px solid rgba(255,255,255,.12)",

              color:
                "white",

              marginBottom:
                "26px"
            }}
          >

            <Sparkles size={18} />

            {t.recruitment}

          </div>

          {/* TITLE */}

          <h1
            className="hero-title"
            style={{
              maxWidth:
                "720px",

              fontSize:
              "clamp(40px,7vw,82px)",

              lineHeight:
                "1.02",

              textShadow:
                "0 6px 24px rgba(0,0,0,.35)"
            }}
          >
            {t.heroTitle}
          </h1>

          {/* SUBTITLE */}

          <p
            style={{
              color:
                "rgba(255,255,255,.88)",

              fontSize:
                "clamp(16px,2vw,20px)",

              maxWidth:
                "620px",

              marginTop:
                "22px",

              lineHeight:
                1.8,

              textShadow:
                "0 2px 12px rgba(0,0,0,.22)"
            }}
          >
            {t.heroSubtitle}
          </p>

          {/* BUTTONS */}

          <div className="hero-actions">

            <button className="btn-primary">

              {t.getStarted}

              <ArrowRight
                size={18}
                style={{
                  marginLeft:
                    "8px"
                }}
              />

            </button>

            <button
              className="btn-secondary"
              style={{
                background:
                  "rgba(255,255,255,.1)",

                color:
                  "white",

                border:
                  "1px solid rgba(255,255,255,.18)"
              }}
            >
              {t.explore}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}