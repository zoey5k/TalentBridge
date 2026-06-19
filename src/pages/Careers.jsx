import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Careers() {

  const [jobs, setJobs] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const navigate =
    useNavigate();

  useEffect(() => {

    async function fetchJobs() {

      try {

        const response =
          await fetch(
            "https://default0bc92751071a4e2ca48b633206fef3.74.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/b2de27e11bbc4ecd9db8b80d15e6d7f6/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=5cqyWmlS1vP_2BUaMVLUMudvPT94QVILhHEF6mA3m-4",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/json",
              },
            }
          );

        const data =
          await response.json();

        setTimeout(() => {

          setJobs(
            Array.isArray(data)
              ? data
              : []
          );

          setLoading(false);

        }, 1200);

      } catch (error) {

        console.error(error);
        setLoading(false);
      }
    }

    fetchJobs();

  }, []);

  return (

    <div
      className="container"
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "100px"
      }}
    >

      {/* HEADER */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "70px"
        }}
      >
        <span
          style={{
            color:
              "var(--primary)",
            fontWeight: 700,
            letterSpacing:
              "1px"
          }}
        >
          CAREERS
        </span>

        <h1
          style={{
            marginTop: "12px"
          }}
        >
          Actively Recruiting
        </h1>

        <p
          style={{
            color:
              "var(--text-secondary)",
            maxWidth: "600px",
            margin:
              "0 auto"
          }}
        >
          Explore exciting career
          opportunities and become
          part of our journey.
        </p>
      </div>

      {/* LOADING */}

      {loading ? (

        <div className="row">

          {[1,2,3,4].map((i) => (

            <div
              key={i}
              className="col-md-6 mb-4"
            >
              <div className="job-card-skeleton" />
            </div>

          ))}

        </div>

      ) : jobs.length === 0 ? (

        <div className="text-center">
          <h3>
            No Active Recruiting
          </h3>

          <p>
            Check back again soon.
          </p>
        </div>

      ) : (

        <div className="row">

          {jobs.map((job) => (

            <div
              key={job.ID}
              className="col-lg-6 mb-4"
            >

              <div
                className="career-card"
                style={{
                  background:
                    "var(--surface)",
                  border:
                    "1px solid rgba(255,255,255,.08)",
                  borderRadius:
                    "28px",
                  padding:
                    "34px",
                  height: "100%",
                  boxShadow:
                    "0 12px 40px rgba(0,0,0,.06)",
                  transition:
                    "all .35s ease"
                }}
              >

                {/* TOP */}

                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    alignItems:
                      "center",
                    marginBottom:
                      "24px"
                  }}
                >

                  <span
                    style={{
                      background:
                        "rgba(30,78,216,.08)",
                      color:
                        "var(--primary)",
                      padding:
                        "10px 18px",
                      borderRadius:
                        "999px",
                      fontWeight:
                        600,
                      fontSize:
                        "14px"
                    }}
                  >
                    {job?.Function?.Value ||
                      "General"}
                  </span>

                  <span
                    style={{
                      color:
                        "#94A3B8",
                      fontSize:
                        ".9rem"
                    }}
                  >
                    {job?.PositionID}
                  </span>

                </div>
{/* TITLE */}

<h3
  style={{
    fontWeight:
      700,
    marginBottom:
      "18px",
    fontSize:
      "1.8rem"
  }}
>
  {job?.Title}
</h3>

{/* JOB META */}

<div
  style={{
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom:
      "22px"
  }}
>

  <span
    style={{
      background:
        "rgba(30,78,216,.08)",
      color:
        "var(--primary)",
      padding:
        "8px 14px",
      borderRadius:
        "999px",
      fontSize:
        "13px",
      fontWeight:
        600
    }}
  >
    Full-Time
  </span>

  <span
    style={{
      background:
        "rgba(16,185,129,.08)",
      color:
        "#10B981",
      padding:
        "8px 14px",
      borderRadius:
        "999px",
      fontSize:
        "13px",
      fontWeight:
        600
    }}
  >
    Egypt
  </span>

  <span
    style={{
      background:
        "rgba(245,158,11,.08)",
      color:
        "#F59E0B",
      padding:
        "8px 14px",
      borderRadius:
        "999px",
      fontSize:
        "13px",
      fontWeight:
        600
    }}
  >
    Entry–Mid Level
  </span>

</div>

{/* DESCRIPTION TITLE */}

<h5
  style={{
    fontWeight:
      700,
    marginBottom:
      "12px"
  }}
>
  Job Description:
</h5>

{/* DESCRIPTION */}

<p
  style={{
    color:
      "var(--text-secondary)",
    minHeight:
      "110px",
    lineHeight:
      1.8,
    marginBottom:
      "30px"
  }}
>
  {job?.Position_x0020_Description ||
    "No description provided."}
</p>

{/* MICRO TEXT */}

<p
  style={{
    fontSize:
      ".85rem",
    color:
      "#94A3B8",
    marginBottom:
      "30px"
  }}
>
  Powered by TalentBridge
</p>

                {/* BUTTON */}

                <button
                  className="btn-primary"
                  style={{
                    width: "100%",
                    padding:
                      "15px",
                    borderRadius:
                      "16px"
                  }}
                  onClick={() =>
                    navigate(
                      `/apply?position=${encodeURIComponent(
                        job?.Title || ""
                      )}&positionId=${encodeURIComponent(
                        job?.PositionID || ""
                      )}`
                    )
                  }
                >
                  Apply Now
                </button>

              </div>

            </div>
          ))}

        </div>

      )}

    </div>
  );
}