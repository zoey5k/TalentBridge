import { Briefcase } from "lucide-react";
export default function CTASection({
  t
}) {

  return (

    <section className="section">

      <div className="container">

        <div
          className="job-card cta-card"
style={{
  background:
    "linear-gradient(135deg, rgba(30,78,216,.08), rgba(96,165,250,.12))"
}}
        >

          <Briefcase
            size={56}
            style={{
              color:
                "var(--primary)",

              marginBottom:
                "22px"
            }}
          />

          <h2>
            {t.ctaTitle}
          </h2>

          <p
            style={{
              maxWidth:
                "700px",

              margin:
                "20px auto"
            }}
          >
            {t.ctaText}
          </p>

          <button
            className="btn-primary"
            style={{
              marginTop:
                "20px"
            }}
          >
            Get Started
          </button>

        </div>

      </div>

    </section>
  );
}