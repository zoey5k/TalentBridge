import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Success() {

  const navigate = useNavigate();

  useEffect(() => {

    const timer = setTimeout(() => {
      navigate("/");
    }, 7000);

    return () => clearTimeout(timer);

  }, [navigate]);

  return (

    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #F5F7FA 0%, #E8EEF5 100%)",
        padding: "20px",
      }}
    >

      <div
        className="card border-0 shadow-lg text-center p-5"
        style={{
          maxWidth: "650px",
          width: "100%",
          borderRadius: "30px",
          animation: "fadeIn 0.7s ease",
        }}
      >

        {/* SUCCESS ICON */}

        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: "#E7F7ED",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto 30px auto",
            animation: "pop 0.5s ease",
          }}
        >

          <div
            style={{
              fontSize: "60px",
              color: "#28A745",
              fontWeight: "700",
            }}
          >
            ✓
          </div>

        </div>

        {/* TITLE */}

        <h1
          style={{
            color: "#0C3B5E",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Application Submitted Successfully
        </h1>

        {/* MESSAGE */}

        <p
          style={{
            color: "#555",
            lineHeight: "1.8",
            fontSize: "1.1rem",
            marginBottom: "30px",
          }}
        >
          Thank you for applying through TalentBridge.
          Our recruitment team will review your application and
          contact you if your profile matches the position requirements.
        </p>

        {/* NEXT STEPS */}

        <div
          style={{
            backgroundColor: "#F5F7FA",
            padding: "20px",
            borderRadius: "16px",
            marginBottom: "25px",
          }}
        >

          <h5
            style={{
              color: "#0C3B5E",
              fontWeight: "600",
            }}
          >
            What Happens Next?
          </h5>

          <ul
            style={{
              textAlign: "left",
              color: "#555",
              lineHeight: "2",
              marginTop: "15px",
            }}
          >
            <li>Initial recruiter screening</li>
            <li>Profile evaluation and shortlisting</li>
            <li>Interview scheduling if selected</li>
            <li>Hiring process updates via email</li>
          </ul>

        </div>

        {/* REDIRECT TEXT */}

        <p
          style={{
            color: "#888",
            marginBottom: "0",
          }}
        >
          Redirecting to homepage...
        </p>

      </div>

      {/* ANIMATIONS */}

      <style>{`
        @keyframes pop {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }

          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </div>
  );
}

export default Success;