import { Link } from "react-router-dom";

export default function Footer() {

  return (

    <footer className="footer">

      <div
  className="container footer-grid"
>
    

        {/* LEFT */}

        <div>

          <h2
            className="logo"
            style={{
              marginBottom:
                "20px"
            }}
          >
            TalentBridge
          </h2>

          <p
            style={{
              maxWidth:
                "100%",

              lineHeight:
                1.8
            }}
          >
            Transforming recruitment
            through automation,
            Microsoft integration,
            and intelligent hiring
            experiences built for
            modern organizations.
          </p>

          <div
            style={{
              marginTop:
                "24px",

              display:
                "inline-flex",

              alignItems:
                "center",

              gap:
                "10px",

              padding:
                "12px 18px",

              borderRadius:
                "999px",

              background:
                "rgba(96,165,250,.1)"
            }}
          >
            🇪🇬 Proudly Built In Egypt
          </div>

        </div>

        {/* COMPANY */}

        <div>

          <h4
            style={{
              marginBottom:
                "20px"
            }}
          >
            Company
          </h4>

          <div
            style={{
              display:
                "flex",

              flexDirection:
                "column",

              gap:
                "14px"
            }}
          >

            <Link to="/careers">
              Careers
            </Link>

            <Link to="/pricing">
              Pricing
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>

        </div>

        {/* RESOURCES */}

        <div>

          <h4
            style={{
              marginBottom:
                "20px"
            }}
          >
            Resources
          </h4>

          <div
            style={{
              display:
                "flex",

              flexDirection:
                "column",

              gap:
                "14px"
            }}
          >

            <Link to="/about">
              About
            </Link>

            <Link to="/privacy">
              Privacy
            </Link>

            <Link to="/faq">
              FAQ
            </Link>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div
        style={{
          borderTop:
            "1px solid var(--border)",

          padding:
            "22px 0",

          textAlign:
            "center"
        }}
      >

        <p>
          © 2026 TalentBridge.
          Built for the future
          of recruitment in Egypt.
        </p>

      </div>

    </footer>
  );
}