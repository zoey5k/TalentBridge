export default function FlowSection({
  t
}) {

  const flowSteps = [

    {
      number: "01",
      title: "Job Request",
      brief:
        "Hiring manager submits a recruitment request."
    },

    {
      number: "02",
      title: "Approval",
      brief:
        "Department approval through workflow automation."
    },

    {
      number: "03",
      title: "Publishing",
      brief:
        "Position automatically posted to careers portal."
    },

    {
      number: "04",
      title: "Applications",
      brief:
        "Candidates apply directly through TalentBridge."
    },

    {
      number: "05",
      title: "Screening",
      brief:
        "Automated filtering and HR shortlisting."
    },

    {
      number: "06",
      title: "Interviews",
      brief:
        "Interview scheduling through Teams."
    },

    {
      number: "07",
      title: "Hiring",
      brief:
        "Final offer and onboarding workflow."
    }

  ];

  return (

    <section
      id="flow"
      className="section"
    >

      <div className="container">

        <div
          style={{
            textAlign:
              "center",

            marginBottom:
              "70px"
          }}
        >

          <span
            style={{
              color:
                "var(--primary)",

              fontWeight:
                "700"
            }}
          >
            {t.flow}
          </span>

          <h2
            style={{
              marginTop:
                "14px"
            }}
          >
            {t.flowTitle}
          </h2>

        </div>

        <div className="timeline-wrapper">

          {flowSteps.map(
            (step) => (

            <div
              key={step.number}
              className="timeline-item"
            >

              <div
                className="timeline-circle"
              >
                {step.number}
              </div>

              <h4
                className="timeline-title"
              >
                {step.title}
              </h4>

              <p
                className="timeline-brief"
              >
                {step.brief}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}