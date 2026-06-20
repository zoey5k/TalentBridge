import { Sparkles, Target, Eye, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-badge">
              <Sparkles size={18} />
              About TalentBridge
            </div>
            <h1>Transforming Recruitment Through Technology</h1>
            <p>
              TalentBridge is a modern Talent Acquisition CRM and Recruitment
              Management Platform built as part of a Microsoft-powered
              recruitment ecosystem. We digitize and automate the recruitment
              lifecycle while providing a seamless experience for recruiters,
              hiring managers, administrators, and candidates.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="about-mission-grid">
            <div className="about-mission-card">
              <div className="about-mission-icon">
                <Target size={32} />
              </div>
              <h2>Our Mission</h2>
              <p>
                Transform recruitment through automation and Microsoft-powered
                solutions. We empower organizations to hire smarter, faster, and
                more efficiently by eliminating manual processes and enabling
                data-driven decision-making.
              </p>
            </div>
            <div className="about-mission-card">
              <div className="about-mission-icon">
                <Eye size={32} />
              </div>
              <h2>Our Vision</h2>
              <p>
                Become the leading recruitment technology platform in Egypt and
                the region. We aspire to set the standard for modern, automated,
                and intelligent hiring across the Middle East and North Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Highlights */}
      <section className="about-highlights">
        <div className="container">
          <div className="about-section-header">
            <h2>Platform Highlights</h2>
            <p>Everything you need to manage your recruitment lifecycle</p>
          </div>
          <div className="about-highlights-grid">
            <div className="about-highlight-card">
              <div className="highlight-number">01</div>
              <h3>Recruitment Requests</h3>
              <p>Submit and manage hiring requests with automated approval workflows.</p>
            </div>
            <div className="about-highlight-card">
              <div className="highlight-number">02</div>
              <h3>Candidate Management</h3>
              <p>Track candidates through every stage of the recruitment pipeline.</p>
            </div>
            <div className="about-highlight-card">
              <div className="highlight-number">03</div>
              <h3>Interview Scheduling</h3>
              <p>Schedule and manage interviews seamlessly through Microsoft Teams.</p>
            </div>
            <div className="about-highlight-card">
              <div className="highlight-number">04</div>
              <h3>Analytics</h3>
              <p>Real-time dashboards and Power BI reports for data-driven hiring.</p>
            </div>
            <div className="about-highlight-card">
              <div className="highlight-number">05</div>
              <h3>Automation</h3>
              <p>Power Automate workflows eliminate manual tasks and reduce hiring time.</p>
            </div>
            <div className="about-highlight-card">
              <div className="highlight-number">06</div>
              <h3>Hiring Workflows</h3>
              <p>End-to-end hiring workflows from job request to offer acceptance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Microsoft Ecosystem */}
      <section className="about-ecosystem">
        <div className="container">
          <div className="about-section-header">
            <h2>Built on Microsoft Ecosystem</h2>
            <p>Seamlessly integrated with the tools your organization already uses</p>
          </div>
          <div className="about-eco-grid">
            <div className="about-eco-card">
              <h4>Power Apps</h4>
              <p>Create and manage recruitment requests</p>
            </div>
            <div className="about-eco-card">
              <h4>SharePoint</h4>
              <p>Centralized HR and candidate storage</p>
            </div>
            <div className="about-eco-card">
              <h4>Power Automate</h4>
              <p>Automate approvals and workflows</p>
            </div>
            <div className="about-eco-card">
              <h4>Teams</h4>
              <p>Interview scheduling and collaboration</p>
            </div>
            <div className="about-eco-card">
              <h4>Power BI</h4>
              <p>Recruitment analytics and KPIs</p>
            </div>
            <div className="about-eco-card">
              <h4>Outlook</h4>
              <p>Automated interview and hiring emails</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="about-cta">
            <h2>Ready to Transform Your Recruitment?</h2>
            <p>Join leading organizations that trust TalentBridge for their hiring needs.</p>
            <div className="about-cta-actions">
              <button className="btn-primary" onClick={() => navigate("/pricing")}>
                View Pricing
                <ArrowRight size={18} style={{ marginLeft: 8 }} />
              </button>
              <button className="btn-secondary" onClick={() => navigate("/careers")}>
                Explore Careers
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}