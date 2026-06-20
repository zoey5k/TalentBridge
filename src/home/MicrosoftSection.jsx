import powerAppsLogo from "../assets/powerapps.png";
import sharepointLogo from "../assets/sharepoint.png";
import automateLogo from "../assets/powerautomate.png";
import teamsLogo from "../assets/teams.png";
import powerBILogo from "../assets/powerbi.png";
import outlookLogo from "../assets/outlook.png";

export default function MicrosoftSection({ t }) {
  const ecosystem = [
    {
      name: "PowerApps",
      image: powerAppsLogo,
      description: "Create and manage recruitment requests.",
    },
    {
      name: "Power Automate",
      image: automateLogo,
      description: "Automate approvals and workflows.",
    },
    {
      name: "SharePoint",
      image: sharepointLogo,
      description: "Centralized HR and candidate storage.",
    },
    {
      name: "Microsoft Teams",
      image: teamsLogo,
      description: "Interview scheduling and collaboration.",
    },
    {
      name: "Power BI",
      image: powerBILogo,
      description: "Recruitment analytics and KPIs.",
    },
    {
      name: "Outlook",
      image: outlookLogo,
      description: "Automated interview and hiring emails.",
    },
  ];

  return (
    <section id="integrations" className="section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-badge">{t.microsoft}</span>
          <h2>{t.microsoftTitle}</h2>
          <p>{t.microsoftSubtitle}</p>
        </div>

        <div className="ecosystem-grid">
          {ecosystem.map((tool) => (
            <div key={tool.name} className="ecosystem-card">
              <div className="eco-icon">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="eco-logo"
                />
              </div>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}