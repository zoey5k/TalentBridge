import {
  Check,
  Sparkles
} from "lucide-react";

export default function PricingSection({
  t
}) {

  const plans = [

    {
      title:
        "Starter",

      price:
        "EGP 3,999",

      description:
        "For startups and small businesses beginning digital recruitment.",

      features: [
        "Job Posting Management",
        "Candidate Tracking",
        "Recruitment Dashboard",
        "Email Notifications",
        "Basic Analytics"
      ],

      button:
        "Start Now"
    },

    {
      title:
        "Professional",

      price:
        "EGP 9,999",

      popular:
        true,

      description:
        "Built for growing HR teams needing automation and analytics.",

      features: [
        "Everything in Starter",
        "Power BI Dashboards",
        "Power Automate Workflows",
        "Interview Scheduling",
        "Approval Flows",
        "Microsoft Teams Integration",
        "Advanced Reporting"
      ],

      button:
        "Get Started"
    },

    {
      title:
        "Enterprise",

      price:
        "Custom",

      description:
        "For enterprises and government organizations requiring scale.",

      features: [
        "Everything in Professional",
        "AI Candidate Screening",
        "SharePoint Integration",
        "Custom Workflow Design",
        "Role-Based Access",
        "Dedicated Support",
        "SLA & Security Compliance"
      ],

      button:
        "Book Demo"
    }

  ];

  return (

    <section
      className="section"
      id="pricing"
    >

      <div className="container">

        {/* HEADER */}

        <div
          style={{
            textAlign:
              "center",

            marginBottom:
              "60px"
          }}
        >

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
                "rgba(30,78,216,.08)",

              color:
                "var(--primary)",

              marginBottom:
                "24px"
            }}
          >

            <Sparkles size={18} />

            Pricing Plans

          </div>

          <h2>
            Simple,
            Transparent Pricing
          </h2>

          <p
            style={{
              maxWidth:
                "650px",

              margin:
                "20px auto 0"
            }}
          >
            Choose the plan that
            best fits your hiring
            needs and scale your
            recruitment effortlessly.
          </p>

        </div>

        {/* PRICING GRID */}

        <div
          style={{
            display:
              "grid",

            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",

            gap:
              "30px",

            alignItems:
              "stretch"
          }}
        >

          {plans.map((plan) => (

            <div
              key={plan.title}
              className="job-card"
              style={{
                position:
                  "relative",

                padding:
                  "40px",

                borderRadius:
                  "34px",

                border:
                  plan.popular
                    ? "2px solid var(--primary)"
                    : "1px solid var(--border)",

                transform:
                  plan.popular
                    ? "scale(1.03)"
                    : "scale(1)",

                boxShadow:
                  plan.popular
                    ? "0 20px 60px rgba(37,99,235,.15)"
                    : "var(--shadow-md)"
              }}
            >

              {/* POPULAR */}

              {plan.popular && (

                <div
                  style={{
                    position:
                      "absolute",

                    top:
                      "-14px",

                    left:
                      "50%",

                    transform:
                      "translateX(-50%)",

                    background:
                      "var(--primary)",

                    color:
                      "white",

                    padding:
                      "8px 18px",

                    borderRadius:
                      "999px",

                    fontSize:
                      "14px",

                    fontWeight:
                      "600"
                  }}
                >
                  Most Popular
                </div>

              )}

              <h3>
                {plan.title}
              </h3>

              <h1
                style={{
                  fontSize:
                    "48px",

                  margin:
                    "20px 0 8px"
                }}
              >
                {plan.price}
              </h1>

              <p>
                {plan.description}
              </p>

              <div
                style={{
                  marginTop:
                    "30px",

                  display:
                    "flex",

                  flexDirection:
                    "column",

                  gap:
                    "18px"
                }}
              >

                {plan.features.map(
                  (feature) => (

                  <div
                    key={feature}
                    style={{
                      display:
                        "flex",

                      alignItems:
                        "center",

                      gap:
                        "12px"
                    }}
                  >

                    <Check
                      size={18}
                      color="var(--primary)"
                    />

                    <span>
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

              <button
                className={
                  plan.popular
                    ? "btn-primary"
                    : "btn-secondary"
                }
                style={{
                  width:
                    "100%",

                  marginTop:
                    "36px"
                }}
              >
                {plan.button}
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}