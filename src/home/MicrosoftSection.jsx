import powerAppsLogo from "../assets/powerapps.png";
import sharepointLogo from "../assets/sharepoint.png";
import automateLogo from "../assets/powerautomate.png";
import teamsLogo from "../assets/teams.png";
import powerBILogo from "../assets/powerbi.png";
import outlookLogo from "../assets/outlook.png";

export default function MicrosoftSection({
  t
}) {

  const ecosystem = [

    {
      name: "PowerApps",
      image: powerAppsLogo,
      description:
        "Create and manage recruitment requests."
    },

    {
      name: "Power Automate",
      image: automateLogo,
      description:
        "Automate approvals and workflows."
    },

    {
      name: "SharePoint",
      image: sharepointLogo,
      description:
        "Centralized HR and candidate storage."
    },

    {
      name: "Microsoft Teams",
      image: teamsLogo,
      description:
        "Interview scheduling and collaboration."
    },

    {
      name: "Power BI",
      image: powerBILogo,
      description:
        "Recruitment analytics and KPIs."
    },

    {
      name: "Outlook",
      image: outlookLogo,
      description:
        "Automated interview and hiring emails."
    }

  ];

  return (

    <section
      id="integrations"
      className="section"
    >

      <div className="container">

        <div
          style={{
            textAlign: "center",
            marginBottom: "60px"
          }}
        >

          <span
            style={{
              color:
                "var(--primary)",
              fontWeight: 700
            }}
          >
            {t.microsoft}
          </span>

          <h2
            style={{
              marginTop: "12px",
              color:
                "var(--text)"
            }}
          >
            {t.microsoftTitle}
          </h2>

          <p
            style={{
              maxWidth: "720px",
              margin:
                "18px auto 0",
              color:
                "var(--text-secondary)"
            }}
          >
            {t.microsoftSubtitle}
          </p>

        </div>

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(3, 1fr)",

            gap: "28px"
          }}
        >

          {ecosystem.map(
            (tool) => (

            <div
              key={tool.name}
              className="job-card"
              style={{
                padding: "36px",
                borderRadius: "28px",
                textAlign: "center"
              }}
            >

              <img
                src={tool.image}
                alt={tool.name}
                style={{
                  width: "72px",
                  height: "72px",
                  objectFit:
                    "contain",
                  marginBottom:
                    "22px"
                }}
              />

              <h3
                style={{
                  color:
                    "var(--text)"
                }}
              >
                {tool.name}
              </h3>

              <p
                style={{
                  color:
                    "var(--text-secondary)"
                }}
              >
                {tool.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}