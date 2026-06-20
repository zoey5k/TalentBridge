import powerAppsLogo from "../assets/powerapps.png";
import sharepointLogo from "../assets/sharepoint.png";
import automateLogo from "../assets/powerautomate.png";
import teamsLogo from "../assets/teams.png";
import powerBILogo from "../assets/powerbi.png";
import outlookLogo from "../assets/outlook.png";

export default function MicrosoftSection({ t }) {
  const ecosystem = [
    {
      name: t.msPowerApps,
      image: powerAppsLogo,
      description: t.msPowerAppsDesc,
    },
    {
      name: t.msPowerAutomate,
      image: automateLogo,
      description: t.msPowerAutomateDesc,
    },
    {
      name: t.msSharePoint,
      image: sharepointLogo,
      description: t.msSharePointDesc,
    },
    {
      name: t.msTeams,
      image: teamsLogo,
      description: t.msTeamsDesc,
    },
    {
      name: t.msPowerBI,
      image: powerBILogo,
      description: t.msPowerBIDesc,
    },
    {
      name: t.msOutlook,
      image: outlookLogo,
      description: t.msOutlookDesc,
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