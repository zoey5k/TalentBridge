import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-content">
        <div className="loader-logo-container">
          <img src="/logo.png" alt="TalentBridge" className="loader-logo" />
          <div className="loader-spinner" />
        </div>
        <h2 className="loader-title">TalentBridge</h2>
        <p className="loader-subtitle">Connecting Talent with Opportunity</p>
      </div>
    </div>
  );
}