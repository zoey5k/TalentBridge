import {
  Workflow,
  Clock3,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export default function FeaturesSection({ t }) {
  const features = [
    {
      icon: <Workflow size={28} />,
      title: t.smartAutomation,
      text: t.smartAutomationText,
      gradient: "linear-gradient(135deg, #2563EB, #60A5FA)",
    },
    {
      icon: <Clock3 size={28} />,
      title: t.fasterHiring,
      text: t.fasterHiringText,
      gradient: "linear-gradient(135deg, #7C3AED, #A78BFA)",
    },
    {
      icon: <BarChart3 size={28} />,
      title: t.analytics,
      text: t.analyticsText,
      gradient: "linear-gradient(135deg, #059669, #34D399)",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: t.ecosystem,
      text: t.ecosystemText,
      gradient: "linear-gradient(135deg, #DC2626, #F87171)",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-badge">{t.why}</span>
          <h2>{t.whyTitle}</h2>
          <p>
            A modern recruitment ecosystem powered by automation, analytics, and
            seamless Microsoft integration.
          </p>
        </div>

        <div className="features-grid">
          {features.map((item) => (
            <div key={item.title} className="feature-card">
              <div
                className="feature-icon-wrap"
                style={{ background: item.gradient }}
              >
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}