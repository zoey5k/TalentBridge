import { Link } from "react-router-dom";

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* LEFT - Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-mark" />
              TalentBridge
            </div>
            <p className="footer-description">
              {t.footerDescription}
            </p>
            <div className="egypt-badge">
              <span>🇪🇬</span>
              <span>{t.builtInEgypt}</span>
            </div>
          </div>

          {/* Product */}
          <div className="footer-col">
            <h4>{t.productFeatures}</h4>
            <div className="footer-links">
              <Link to="/">{t.productFeatures}</Link>
              <Link to="/pricing">{t.productPricing}</Link>
              <Link to="/careers">{t.productCareers}</Link>
            </div>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>{t.companyAbout}</h4>
            <div className="footer-links">
              <Link to="/about">{t.companyAbout}</Link>
              <Link to="/careers">{t.companyContact}</Link>
            </div>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h4>{t.resourcesFAQ}</h4>
            <div className="footer-links">
              <Link to="/about">{t.resourcesFAQ}</Link>
              <Link to="/about">{t.resourcesPrivacy}</Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}