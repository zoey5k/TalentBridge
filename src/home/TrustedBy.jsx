export default function TrustedBy({
  t
}) {


  const companies = [

    {
      name: "EUI",
      image: "/eui.webp"
    }
  ];

  return (

    <section
      className="trusted-section"
    >

      <div className="container">

        <p className="trusted-title">
          {t.trusted}
        </p>

      </div>

      <div className="marquee-wrapper">

        <div className="marquee-track">

          {[companies
          ].map((company, i) => (

            <div
              key={i}
              className="logo-card"
            >

              <img
                src={company.image}
                alt={company.name}
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}