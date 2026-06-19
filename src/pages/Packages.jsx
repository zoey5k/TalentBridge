import { useNavigate } from "react-router-dom";
function Packages() {
  const navigate = useNavigate();
  const plans = [
    {
      name: "Standard",
      price: "$15",
      features: [
        "Basic recruitment tracking",
        "Manage candidates",
        "Email support",
      ],
      highlight: false,
    },
    {
      name: "Silver",
      price: "$20",
      features: [
        "Advanced analytics",
        "Pipeline tracking",
        "Priority email support",
      ],
      highlight: false,
    },
    {
      name: "Gold",
      price: "$35",
      features: [
        "Full platform access",
        "Advanced analytics",
        "Priority support",
        "Dedicated account manager",
      ],
      highlight: true,
    },
  ];

  return (
    <div>
      {/* HEADER */}
      <div className="text-center mb-5">
        <h1>Pricing Plans</h1>
        <p className="lead">
          Choose the perfect plan for your recruitment needs
        </p>
      </div>

      {/* PRICING CARDS */}
      <div className="row">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div
              className={`card h-100 shadow ${
                plan.highlight ? "border-warning" : ""
              }`}
            >
              <div className="card-body d-flex flex-column text-center">
                {" "}
                {plan.highlight && (
                  <span className="badge bg-warning text-dark mb-2">
                    Recommended
                  </span>
                )}
                <h3>{plan.name}</h3>
                <h2 className="my-3">{plan.price}</h2>
                <ul className="list-unstyled mb-4 text-start">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn w-100 mt-auto ${
                    plan.highlight ? "btn-warning" : "btn-outline-dark"
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center py-5">
        <h4>Need a custom solution?</h4>
        <p>Contact us for enterprise pricing and tailored features.</p>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/contact")}
        >
          Contact Sales
        </button>
      </div>
    </div>
  );
}

export default Packages;
