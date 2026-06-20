export default function FeaturesSection({ t }) {
  const features = [
    {
      title: t.valueEndToEnd,
      text: t.valueEndToEndText,
    },
    {
      title: t.valueCandidateMatching,
      text: t.valueCandidateMatchingText,
    },
    {
      title: t.valueInterviewCoord,
      text: t.valueInterviewCoordText,
    },
    {
      title: t.valueDataDriven,
      text: t.valueDataDrivenText,
    },
    {
      title: t.valueCollaborative,
      text: t.valueCollaborativeText,
    },
    {
      title: t.valueTalentPipeline,
      text: t.valueTalentPipelineText,
    },
  ];

  return (
    <section className="section features-section-new">
      <div className="container">
        <div className="section-header-center">
          <span className="section-badge">{t.why}</span>
          <h2>{t.whyTitle}</h2>
          <p>
            A modern recruitment ecosystem powered by automation, analytics, and
            seamless Microsoft integration.
          </p>
        </div>

        <div className="features-grid-new">
          {features.map((item, index) => (
            <div key={index} className="feature-card-new">
              <div className="feature-card-new-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="feature-card-new-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}