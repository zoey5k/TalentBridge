import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function Careers({ t }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch(
          "https://default0bc92751071a4e2ca48b633206fef3.74.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/b2de27e11bbc4ecd9db8b80d15e6d7f6/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=5cqyWmlS1vP_2BUaMVLUMudvPT94QVILhHEF6mA3m-4",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        setTimeout(() => {

          const filteredJobs = Array.isArray(data)
            ? data.filter(
                (job) =>
                  job.Published_x003f_?.Value === "Publish"
              )
            : [];

          setJobs(filteredJobs);
          setLoading(false);

        }, 1200);

      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <div
      className="container"
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "70px",
        }}
      >
        <span
          style={{
            color: "var(--primary)",
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          {t?.careers?.toUpperCase?.() || "CAREERS"}
        </span>
        <h1 style={{ marginTop: "12px" }}>{t?.careersTitle || "Actively Recruiting"}</h1>
        <p
          style={{
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {t?.careersSubtitle || "Explore exciting career opportunities and become part of our journey."}
        </p>
      </div>

      {jobs.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <h3>{t?.careersEmpty || "No Active Recruiting"}</h3>
          <p>{t?.careersEmptyText || "Check back again soon."}</p>
        </div>
      ) : (
        <div className="careers-grid">
          {jobs.map((job) => (
            <div key={job.ID} className="career-card">
              {/* TOP */}
              <div className="career-card-top">
                <span className="career-tag">
                  {job?.Function?.Value || "General"}
                </span>
                <span className="career-id">{job?.PositionID}</span>
              </div>

              <h3 className="career-title">{job?.Title}</h3>

              <div className="career-meta">
                <span className="career-meta-tag type">{t?.careersType || "Full-Time"}</span>
                <span className="career-meta-tag location">{t?.careersLocation || "Egypt"}</span>
                <span className="career-meta-tag level">{t?.careersLevel || "Entry–Mid Level"}</span>
              </div>

              <h5 className="career-desc-label">{t?.careersDescription || "Job Description:"}</h5>
              <p className="career-description">
                {job?.Position_x0020_Description || "No description provided."}
              </p>

              <p className="career-powered">{t?.careersPowered || "Powered by TalentBridge"}</p>

              <button
                className="btn-primary"
                style={{ width: "100%", padding: "15px", borderRadius: "16px" }}
                onClick={() =>
                  navigate(
                    `/apply?position=${encodeURIComponent(job?.Title || "")}&positionId=${encodeURIComponent(job?.PositionID || "")}`
                  )
                }
              >
                {t?.careersApply || "Apply Now"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}