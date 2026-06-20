import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* LEFT - Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Sparkles size={22} />
              TalentBridge
            </div>
            <p className="footer-description">
              Transforming recruitment through automation, Microsoft integration,
              and intelligent hiring experiences built for modern organizations.
            </p>
            <div className="egypt-badge">
              <span>🇪🇬</span>
              <span>Proudly Built in Egypt</span>
            </div>
          </div>

          {/* Product */}
          <div className="footer-col">
            <h4>Product</h4>
            <div className="footer-links">
              <Link to="/">Features</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/careers">Careers</Link>
            </div>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/careers">Contact</Link>
            </div>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h4>Resources</h4>
            <div className="footer-links">
              <Link to="/about">FAQ</Link>
              <Link to="/about">Privacy</Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© 2026 TalentBridge. Built for the future of recruitment in Egypt.</p>
        </div>
      </div>
    </footer>
  );
}