import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  return (
    <div>
      {/* HERO SECTION */}
      <div className="text-center mb-5">
        <h1>About Talent Bridge</h1>
        <p className="lead">
          Connecting talent with opportunity through smarter recruitment.
        </p>
      </div>

      {/* MISSION & VISION */}
      <div className="row mb-5">
        <div className="col-md-6 mb-3">
          <div className="card shadow h-100 p-4">
            <h3 className="mb-3">🎯 Our Mission</h3>
            <p>
              To simplify and optimize the hiring journey by enabling
              organizations to manage recruitment pipelines efficiently.
            </p>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card shadow h-100 p-4">
            <h3 className="mb-3">🚀 Our Vision</h3>
            <p>
              To become a leading platform for modern recruitment and talent
              management worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="mb-5">
        <h2 className="text-center mb-4">What We Do</h2>

        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <div className="card p-3 shadow h-100">
              <h5>⚡ Faster Hiring</h5>
              <p>Streamline recruitment workflows and reduce hiring time.</p>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card p-3 shadow h-100">
              <h5>📊 Data Insights</h5>
              <p>Make better decisions with recruitment analytics.</p>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card p-3 shadow h-100">
              <h5>🤝 Collaboration</h5>
              <p>Enable teams to work together seamlessly.</p>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card p-3 shadow h-100">
              <h5>🌍 Talent Network</h5>
              <p>Connect with top candidates globally.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="text-center p-5 bg-light rounded shadow-sm">
        <h3 className="mb-3">Ready to transform your hiring process?</h3>
        <p className="mb-4">
          Join Talent Bridge today and take your recruitment to the next level.
        </p>
        <button className="btn btn-primary me-2" onClick={() => navigate("/")}>
          Get Started
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => navigate("/careers")}
        >
          View Careers
        </button>{" "}
      </div>
    </div>
  );
}

export default About;
