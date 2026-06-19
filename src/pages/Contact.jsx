import { useState } from "react";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import { Link } from "react-router-dom";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("✅ Message sent!");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="row">
      {/* LEFT SIDE - FORM */}
      <div className="col-md-6">
        <div className="card shadow p-4">
          <h2 className="mb-4">Contact Us</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE - INFO */}
      <div className="col-md-6 mt-4 mt-md-0">
        <div className="card shadow p-4 h-100">
          <h3 className="mb-3">Get in Touch</h3>

          <p>
            We'd love to hear from you. Whether you have a question about
            features, pricing, or anything else — our team is ready to answer.
          </p>

          <hr />

          <p>
            <strong>Email:</strong> info@talentbridge.com
          </p>
          <p>
            <strong>Phone:</strong> +20 100 123 4567
          </p>
          <p>
            <strong>Location:</strong> Cairo, Egypt
          </p>

          <div className="mt-3">
            <Link>
              <img src={linkedin} alt="Linkedin" height="34" className="me-2" />
            </Link>
            <Link>
              <img
                src={instagram}
                alt="Instagram"
                height="38"
                className="me-2"
              />
            </Link>
            <Link>
              <img src={facebook} alt="Facebook" height="36" className="me-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
