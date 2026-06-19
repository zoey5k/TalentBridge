import {
  Workflow,
  Clock3,
  BarChart3,
  ShieldCheck
} from "lucide-react";

export default function FeaturesSection({
  t
}) {

  const features = [

  {
    icon: <Workflow size={34} />,
    title: t.smartAutomation,
    text: t.smartAutomationText
  },

  {
    icon: <Clock3 size={34} />,
    title: t.fasterHiring,
    text: t.fasterHiringText
  },

  {
    icon: <BarChart3 size={34} />,
    title: t.analytics,
    text: t.analyticsText
  },

  {
    icon: <ShieldCheck size={34} />,
    title: t.ecosystem,
    text: t.ecosystemText
  }

];
  return (

    <section className="section">

      <div className="container">

        <div
          style={{
            textAlign:
              "center",

            marginBottom:
              "60px"
          }}
        >

          <span
            style={{
              color:
                "var(--primary)",

              fontWeight:
                "700"
            }}
          >
            {t.why}
          </span>

          <h2
            style={{
              marginTop:
                "14px"
            }}
          >
            {t.whyTitle}
          </h2>

          <p
            style={{
              maxWidth:
                "700px",

              margin:
                "18px auto 0"
            }}
          >
            A modern recruitment
            ecosystem powered by
            automation, analytics,
            and seamless Microsoft
            integration.
          </p>

        </div>

        <div
          style={{
            display:
              "grid",

            gridTemplateColumns:
              "repeat(auto-fit,minmax(260px,1fr))",

            gap:
              "28px"
          }}
        >

          {features.map(
            (item) => (

            <div
              key={item.title}
              className="job-card"
              style={{
                padding:
                  "36px",

                borderRadius:
                  "30px",

                textAlign:
                  "center",

                transition:
                  "all .3s ease"
              }}
            >

              <div
                style={{
                  width:
                    "82px",

                  height:
                    "82px",

                  borderRadius:
                    "24px",

                  display:
                    "flex",

                  alignItems:
                    "center",

                  justifyContent:
                    "center",

                  margin:
                    "0 auto 24px",

                  background:
                    "linear-gradient(to bottom right, rgba(96,165,250,.12), rgba(147,197,253,.18))",

                  color:
                    "var(--primary)"
                }}
              >
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p
                style={{
                  marginTop:
                    "14px"
                }}
              >
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}