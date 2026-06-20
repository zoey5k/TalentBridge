export default function TrustedBy({ t }) {
  return (
    <section className="trusted-section">
      <div className="container">
        <div className="trusted-content">
          <p className="trusted-label">{t.trusted}</p>
          <div className="trusted-cards">
            <div className="trusted-card">
              <div className="trusted-card-inner">
                <img src="/eui.webp" alt="EUI" className="trusted-logo" />
                <div className="trusted-card-info">
                  <h4>EUI</h4>
                  <p>Strategic Partner</p>
                </div>
              </div>
            </div>
            <div className="trusted-card">
              <div className="trusted-card-inner">
                <div className="trusted-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="#2563EB" fillOpacity="0.1"/>
                    <path d="M20 8L24 16L32 17.2L26 23L28 31L20 26.8L12 31L14 23L8 17.2L16 16L20 8Z" fill="#2563EB"/>
                  </svg>
                </div>
                <div className="trusted-card-info">
                  <h4>Microsoft Partner</h4>
                  <p>Powered Ecosystem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}