import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function About({ t }) {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-badge">{t?.aboutBadge || "About TalentBridge"}</div>
            <h1>{t?.aboutTitle || "Transforming Recruitment Through Technology"}</h1>
            <p>{t?.aboutText || "TalentBridge is a modern Talent Acquisition CRM and Recruitment Management Platform."}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-mission-grid">
            <div className="about-mission-card">
              <div className="about-mission-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <h2>{t?.aboutMission || "Our Mission"}</h2>
              <p>{t?.aboutMissionText || "Transform recruitment through automation and Microsoft-powered solutions."}</p>
            </div>
            <div className="about-mission-card">
              <div className="about-mission-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h2>{t?.aboutVision || "Our Vision"}</h2>
              <p>{t?.aboutVisionText || "Become the leading recruitment technology platform in Egypt and the region."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-highlights">
        <div className="container">
          <div className="about-section-header">
            <h2>{t?.aboutHighlights || "Platform Highlights"}</h2>
            <p>{t?.aboutHighlightsSub || "Everything you need to manage your recruitment lifecycle"}</p>
          </div>
          <div className="about-highlights-grid">
            <div className="about-highlight-card">
              <div className="highlight-number">01</div>
              <h3>{t?.aboutHighlight1 || "Recruitment Requests"}</h3>
              <p>{t?.aboutHighlight1Text || "Submit and manage hiring requests with automated approval workflows."}</p>
            </div>
            <div className="about-highlight-card">
              <div className="highlight-number">02</div>
              <h3>{t?.aboutHighlight2 || "Candidate Management"}</h3>
              <p>{t?.aboutHighlight2Text || "Track candidates through every stage of the recruitment pipeline."}</p>
            </div>
            <div className="about-highlight-card">
              <div className="highlight-number">03</div>
              <h3>{t?.aboutHighlight3 || "Interview Scheduling"}</h3>
              <p>{t?.aboutHighlight3Text || "Schedule and manage interviews seamlessly through Microsoft Teams."}</p>
            </div>
            <div className="about-highlight-card">
              <div className="highlight-number">04</div>
              <h3>{t?.aboutHighlight4 || "Analytics"}</h3>
              <p>{t?.aboutHighlight4Text || "Real-time dashboards and Power BI reports for data-driven hiring."}</p>
            </div>
            <div className="about-highlight-card">
              <div className="highlight-number">05</div>
              <h3>{t?.aboutHighlight5 || "Automation"}</h3>
              <p>{t?.aboutHighlight5Text || "Power Automate workflows eliminate manual tasks and reduce hiring time."}</p>
            </div>
            <div className="about-highlight-card">
              <div className="highlight-number">06</div>
              <h3>{t?.aboutHighlight6 || "Hiring Workflows"}</h3>
              <p>{t?.aboutHighlight6Text || "End-to-end hiring workflows from job request to offer acceptance."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-ecosystem">
        <div className="container">
          <div className="about-section-header">
            <h2>{t?.aboutEcosystem || "Built on Microsoft Ecosystem"}</h2>
            <p>{t?.aboutEcosystemSub || "Seamlessly integrated with the tools your organization already uses"}</p>
          </div>
          <div className="about-eco-grid">
            <div className="about-eco-card"><h4>Power Apps</h4><p>Create and manage recruitment requests</p></div>
            <div className="about-eco-card"><h4>SharePoint</h4><p>Centralized HR and candidate storage</p></div>
            <div className="about-eco-card"><h4>Power Automate</h4><p>Automate approvals and workflows</p></div>
            <div className="about-eco-card"><h4>Teams</h4><p>Interview scheduling and collaboration</p></div>
            <div className="about-eco-card"><h4>Power BI</h4><p>Recruitment analytics and KPIs</p></div>
            <div className="about-eco-card"><h4>Outlook</h4><p>Automated interview and hiring emails</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-cta">
            <h2>{t?.aboutCtaTitle || "Ready to Transform Your Recruitment?"}</h2>
            <p>{t?.aboutCtaText || "Join leading organizations that trust TalentBridge for their hiring needs."}</p>
            <div className="about-cta-actions">
              <button className="btn-primary" onClick={() => navigate("/pricing")}>
                {t?.aboutCtaPricing || "View Pricing"}
                <ArrowRight size={18} style={{ marginLeft: 8 }} />
              </button>
              <button className="btn-secondary" onClick={() => navigate("/careers")}>
                {t?.aboutCtaCareers || "Explore Careers"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}