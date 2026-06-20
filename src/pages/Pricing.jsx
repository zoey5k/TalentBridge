import { Check, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Starter",
      price: "EGP 3,999",
      description:
        "For startups and small businesses beginning digital recruitment.",
      features: [
        "Job Posting Management",
        "Candidate Tracking",
        "Recruitment Dashboard",
        "Email Notifications",
        "Basic Analytics",
      ],
      button: "Start Now",
    },
    {
      title: "Professional",
      price: "EGP 9,999",
      popular: true,
      description:
        "Built for growing HR teams needing automation and analytics.",
      features: [
        "Everything in Starter",
        "Power BI Dashboards",
        "Power Automate Workflows",
        "Interview Scheduling",
        "Approval Flows",
        "Microsoft Teams Integration",
        "Advanced Reporting",
      ],
      button: "Get Started",
    },
    {
      title: "Enterprise",
      price: "Custom",
      description:
        "For enterprises and government organizations requiring scale.",
      features: [
        "Everything in Professional",
        "AI Candidate Screening",
        "SharePoint Integration",
        "Custom Workflow Design",
        "Role-Based Access",
        "Dedicated Support",
        "SLA & Security Compliance",
      ],
      button: "Book Demo",
    },
  ];

  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <div className="container">
          <div className="pricing-hero-content">
            <div className="pricing-badge">
              <Sparkles size={18} />
              Pricing Plans
            </div>
            <h1>Simple, Transparent Pricing</h1>
            <p>
              Choose the plan that best fits your hiring needs and scale your
              recruitment effortlessly.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-grid-new">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={`pricing-card-new ${plan.popular ? "popular" : ""}`}
              >
                {plan.popular && (
                  <div className="pricing-popular-badge">Most Popular</div>
                )}
                <h3>{plan.title}</h3>
                <div className="pricing-amount">
                  <span className="pricing-price">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="pricing-period">/month</span>
                  )}
                </div>
                <p className="pricing-desc">{plan.description}</p>
                <ul className="pricing-features-new">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={18} className="pricing-check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={plan.popular ? "btn-primary" : "btn-secondary"}
                  style={{ width: "100%", marginTop: "auto" }}
                >
                  {plan.button}
                  <ArrowRight size={16} style={{ marginLeft: 8 }} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="pricing-faq-grid">
            <div className="pricing-faq-item">
              <h4>Can I switch plans later?</h4>
              <p>
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect immediately.
              </p>
            </div>
            <div className="pricing-faq-item">
              <h4>Is there a free trial?</h4>
              <p>
                We offer a 14-day free trial on all plans. No credit card
                required.
              </p>
            </div>
            <div className="pricing-faq-item">
              <h4>Do you offer custom pricing?</h4>
              <p>
                Yes, Enterprise plans are customized based on your organization's
                size and requirements.
              </p>
            </div>
            <div className="pricing-faq-item">
              <h4>What support is included?</h4>
              <p>
                Starter includes email support. Professional includes priority
                support. Enterprise includes a dedicated account manager.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}