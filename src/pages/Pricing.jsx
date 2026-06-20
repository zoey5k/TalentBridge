import { Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Pricing({ t }) {
  const navigate = useNavigate();

  const plans = [
    {
      title: t?.pricingStarter || "Starter",
      price: t?.pricingStarterPrice || "EGP 3,999",
      description: t?.pricingStarterDesc || "For startups and small businesses beginning digital recruitment.",
      features: [
        "Job Posting Management",
        "Candidate Tracking",
        "Recruitment Dashboard",
        "Email Notifications",
        "Basic Analytics",
      ],
      button: t?.pricingStart || "Start Now",
    },
    {
      title: t?.pricingProfessional || "Professional",
      price: t?.pricingProfessionalPrice || "EGP 9,999",
      popular: true,
      description: t?.pricingProfessionalDesc || "Built for growing HR teams needing automation and analytics.",
      features: [
        "Everything in Starter",
        "Power BI Dashboards",
        "Power Automate Workflows",
        "Interview Scheduling",
        "Approval Flows",
        "Microsoft Teams Integration",
        "Advanced Reporting",
      ],
      button: t?.pricingGetStarted || "Get Started",
    },
    {
      title: t?.pricingEnterprise || "Enterprise",
      price: t?.pricingEnterprisePrice || "Custom",
      description: t?.pricingEnterpriseDesc || "For enterprises and government organizations requiring scale.",
      features: [
        "Everything in Professional",
        "AI Candidate Screening",
        "SharePoint Integration",
        "Custom Workflow Design",
        "Role-Based Access",
        "Dedicated Support",
        "SLA & Security Compliance",
      ],
      button: t?.pricingBookDemo || "Book Demo",
    },
  ];

  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <div className="container">
          <div className="pricing-hero-content">
            <div className="pricing-badge">{t?.pricingPlans || "Pricing Plans"}</div>
            <h1>{t?.pricingTitle || "Simple, Transparent Pricing"}</h1>
            <p>{t?.pricingSubtitle || "Choose the plan that best fits your hiring needs."}</p>
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
                  <div className="pricing-popular-badge">{t?.pricingPopular || "Most Popular"}</div>
                )}
                <h3>{plan.title}</h3>
                <div className="pricing-amount">
                  <span className="pricing-price">{plan.price}</span>
                  {(t?.pricingMonthly || "/month") && plan.price !== (t?.pricingEnterprisePrice || "Custom") && (
                    <span className="pricing-period">{t?.pricingMonthly || "/month"}</span>
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
          <h2>{t?.pricingFaqTitle || "Frequently Asked Questions"}</h2>
          <div className="pricing-faq-grid">
            <div className="pricing-faq-item">
              <h4>{t?.pricingFaq1q || "Can I switch plans later?"}</h4>
              <p>{t?.pricingFaq1a || "Yes, you can upgrade or downgrade your plan at any time."}</p>
            </div>
            <div className="pricing-faq-item">
              <h4>{t?.pricingFaq2q || "Is there a free trial?"}</h4>
              <p>{t?.pricingFaq2a || "We offer a 14-day free trial on all plans."}</p>
            </div>
            <div className="pricing-faq-item">
              <h4>{t?.pricingFaq3q || "Do you offer custom pricing?"}</h4>
              <p>{t?.pricingFaq3a || "Yes, Enterprise plans are customized based on your requirements."}</p>
            </div>
            <div className="pricing-faq-item">
              <h4>{t?.pricingFaq4q || "What support is included?"}</h4>
              <p>{t?.pricingFaq4a || "Starter includes email support. Professional includes priority support."}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}