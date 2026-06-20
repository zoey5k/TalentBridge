import { ArrowRight } from "lucide-react";

export default function FlowSection({ t }) {
  const flowSteps = [
    {
      number: "01",
      title: "Job Request",
      brief: "Hiring manager submits a recruitment request.",
      details: [
        "Manager fills recruitment request form",
        "Position details and requirements defined",
        "Budget and headcount verification",
      ],
    },
    {
      number: "02",
      title: "Approval",
      brief: "Department approval through workflow automation.",
      details: [
        "Automated approval routing",
        "Department head review",
        "HR confirmation",
      ],
    },
    {
      number: "03",
      title: "Publishing",
      brief: "Position automatically posted to careers portal.",
      details: [
        "Auto-publish to careers page",
        "SharePoint list update",
        "External job board integration",
      ],
    },
    {
      number: "04",
      title: "Applications",
      brief: "Candidates apply directly through TalentBridge.",
      details: [
        "Online application form",
        "Resume and document upload",
        "Automated confirmation email",
      ],
    },
    {
      number: "05",
      title: "Screening",
      brief: "Automated filtering and HR shortlisting.",
      details: [
        "Resume parsing and analysis",
        "Skill matching algorithm",
        "HR review and shortlist",
      ],
    },
    {
      number: "06",
      title: "Interviews",
      brief: "Interview scheduling through Teams.",
      details: [
        "Teams interview scheduling",
        "Calendar integration",
        "Automated reminders",
      ],
    },
    {
      number: "07",
      title: "Hiring",
      brief: "Final offer and onboarding workflow.",
      details: [
        "Offer letter generation",
        "Approval workflow",
        "Onboarding checklist",
      ],
    },
  ];

  return (
    <section id="flow" className="section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-badge">{t.flow}</span>
          <h2>{t.flowTitle}</h2>
        </div>

        <div className="flow-container">
          {flowSteps.map((step, index) => (
            <div key={step.number} className="flow-step">
              <div className="flow-step-content">
                <div className="flow-number">{step.number}</div>
                <div className="flow-info">
                  <h3>{step.title}</h3>
                  <p>{step.brief}</p>
                </div>
                <div className="flow-details">
                  <ul>
                    {step.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < flowSteps.length - 1 && (
                <div className="flow-connector">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}