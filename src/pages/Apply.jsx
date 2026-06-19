import { useState } from "react";
import {
  useSearchParams,
  useNavigate
} from "react-router-dom";

function Apply() {

  const [params] =
    useSearchParams();

  const navigate =
    useNavigate();

  const position =
    params.get("position");

  const positionId =
    params.get("positionId");

  const description =
    params.get("description");
  
const [form, setForm] =
useState({

  fullName: "",
  email: "",
  phone: "",
  gender: "",

  university: "",
  major: "",
  experience: "",
  skills: "",

  cvFile: null
});

  const [loading, setLoading] =
    useState(false);

  const [showSuccess,
    setShowSuccess] =
    useState(false);

  const [errors,
    setErrors] =
    useState({});

function handleChange(e) {

  const {
    name,
    value,
    files
  } = e.target;

  setErrors((prev) => ({
    ...prev,
    [name]: ""
  }));

  if (name === "cvFile") {

    setForm({
      ...form,
      cvFile: files[0],
    });

    return;
  }


  /* OPTIONAL FIELDS */

  if (
    name === "university" ||
    name === "major" ||
    name === "skills"
  ) {

    setForm({
      ...form,
      [name]:
        value.trim() === ""
          ? null
          : value
    });

    return;
  }

  setForm({
    ...form,
    [name]: value,
  });
}
  function validateForm() {

    let newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName =
        "Full name is required";
    }

    if (!form.email.trim()) {
      newErrors.email =
        "Email is required";
    }

    if (!form.phone.trim()) {
      newErrors.phone =
        "Phone number is required";
    }

    if (!form.gender) {
      newErrors.gender =
        "Gender is required";
    }

    if (!form.cvFile) {
      newErrors.cvFile =
        "Resume / CV is required";
    }

    setErrors(newErrors);

    return (
      Object.keys(
        newErrors
      ).length === 0
    );
  }

  function convertToBase64(file) {

    return new Promise(
      (
        resolve,
        reject
      ) => {

        const reader =
          new FileReader();

        reader.readAsDataURL(
          file
        );

        reader.onload =
          () =>
            resolve(
              reader.result
            );

        reader.onerror =
          (error) =>
            reject(
              error
            );
      }
    );
  }

  async function submit(e) {

  if (e) {
    e.preventDefault();
  }

  if (!validateForm())
    return;

  setLoading(true);

  try {

    let cvBase64 = "";

    if (form.cvFile) {

      cvBase64 =
        await convertToBase64(
          form.cvFile
        );
    }

    const response =
      await fetch(

        "https://default0bc92751071a4e2ca48b633206fef3.74.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/895a25bec8724c3b89f5a105d8c8e51c/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=oVD-C6MHb2gSvC4-vAoKvWKsjK-Aqy1kjYd8czr4sPA",

        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            fullName:
              form.fullName,

            email:
              form.email,

            phone:
              form.phone,

            gender:
              form.gender,

            university:
              form.university,

            major:
              form.major,

            experience:
              form.experience,

            skills:
              form.skills,

            position,

            positionId,

            cvFileName:
              form.cvFile
                ? form.cvFile.name
                : null,

            cvContent:
              cvBase64 || null
          })
        }
      );

    /* CHECK RESPONSE */

    if (!response.ok) {

      const errorText =
        await response.text();

      console.error(
        "Power Automate Error:",
        errorText
      );

      throw new Error(
        "Failed to submit"
      );
    }

    setShowSuccess(true);

  } catch (error) {

    console.error(error);

    alert(
      "❌ Failed to submit application"
    );
  }

  setLoading(false);
}

  return (

    <div
      className="container"
      style={{
        paddingTop: "80px",
        paddingBottom: "100px",
        minHeight: "100vh"
      }}
    >

      <button
        onClick={() =>
          navigate("/careers")
        }
        style={{
          background: "none",
          border: "none",
          color:
            "var(--primary)",
          fontWeight: 600,
          marginBottom:
            "30px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        ← Back to Careers
      </button>

      <div
        style={{
          textAlign: "center",
          marginBottom: "40px"
        }}
      >
        <span
          style={{
            color:
              "var(--primary)",
            fontWeight: 600
          }}
        >
          APPLICATION
        </span>

        <h1>
          Apply for this Role
        </h1>

      </div>

      <div className="apply-position-card">

        <h2>
          {position}
        </h2>

        <span className="job-badge">
          {positionId}
        </span>

        {description && (
          <>
            <h4
              style={{
                marginTop:
                  "25px"
              }}
            >
              Job Description:
            </h4>

            <p
              style={{
                color:
                  "var(--text-secondary)"
              }}
            >
              {description}
            </p>
          </>
        )}

      </div>

      <form
        onSubmit={submit}
        className="apply-form-card"
      >

        {/* FORM STAYS SAME */}

<h3>
  Personal Information
</h3>

<div className="apply-grid">

  <div>
    <label>
      Full Name *
    </label>

    <input
      type="text"
      name="fullName"
      value={
        form.fullName
      }
      onChange={
        handleChange
      }
      className={`apply-input ${
        errors.fullName
          ? "error"
          : ""
      }`}
    />

    {errors.fullName && (
      <p className="field-error">
        {errors.fullName}
      </p>
    )}
  </div>

  <div>
    <label>
      Email *
    </label>

    <input
      type="email"
      name="email"
      value={
        form.email
      }
      onChange={
        handleChange
      }
      className={`apply-input ${
        errors.email
          ? "error"
          : ""
      }`}
    />

    {errors.email && (
      <p className="field-error">
        {errors.email}
      </p>
    )}
  </div>

  <div>
    <label>
      Phone *
    </label>

    <input
      type="text"
      name="phone"
      value={
        form.phone
      }
      onChange={
        handleChange
      }
      className={`apply-input ${
        errors.phone
          ? "error"
          : ""
      }`}
    />

    {errors.phone && (
      <p className="field-error">
        {errors.phone}
      </p>
    )}
  </div>

  <div>
    <label>
      Gender *
    </label>

    <select
      name="gender"
      value={
        form.gender
      }
      onChange={
        handleChange
      }
      className={`apply-input ${
        errors.gender
          ? "error"
          : ""
      }`}
    >
      <option value="">
        Select Gender
      </option>

      <option value="Male">
        Male
      </option>

      <option value="Female">
        Female
      </option>
    </select>

    {errors.gender && (
      <p className="field-error">
        {errors.gender}
      </p>
    )}
  </div>

  <div>
    <label>
      University
    </label>

    <input
      type="text"
      name="university"
      value={
        form.university
      }
      onChange={
        handleChange
      }
      className="apply-input"
    />
  </div>

  <div>
    <label>
      Major
    </label>

    <input
      type="text"
      name="major"
      value={
        form.major
      }
      onChange={
        handleChange
      }
      className="apply-input"
    />
  </div>

</div>

<div
  style={{
    marginTop: "30px"
  }}
>
  <label>
    What's your prevoius experience in the field of choice?
  </label>

<textarea
  name="experience"
  value={
    form.experience || ""
  }
  onChange={
    handleChange
  }
  className="apply-input"
  rows="4"
  placeholder="Describe your previous experience"
/>
</div>

<div
  style={{
    marginTop: "24px"
  }}
>
  <label>
    Skills
  </label>

  <textarea
    name="skills"
    value={
      form.skills
    }
    onChange={
      handleChange
    }
    className="apply-input"
    rows="3"
  />
</div>

<div
  style={{
    marginTop: "30px"
  }}
>
  <label>
    Upload CV *
  </label>

  <input
    type="file"
    name="cvFile"
    accept=".pdf,.doc,.docx"
    onChange={
      handleChange
    }
    className={`apply-input ${
      errors.cvFile
        ? "error"
        : ""
    }`}
  />

  {errors.cvFile && (
    <p className="field-error">
      {errors.cvFile}
    </p>
  )}
</div>

        <button
          type="submit"
          className="btn-primary"
          style={{
            width: "100%",
            marginTop: "40px",
            padding: "18px"
          }}
          disabled={loading}
        >
          {loading
            ? "Submitting..."
            : "Submit Application"}
        </button>

      </form>

      {showSuccess && (

<div
  style={{
    display: "flex",
    gap: "14px",
    justifyContent:
      "center",
    flexWrap:
      "wrap"
  }}
>

          <div
            style={{
              background:
                "var(--surface)",
              padding: "50px",
              borderRadius:
                "32px",
              width: "90%",
              maxWidth:
                "520px",
              textAlign:
                "center"
            }}
          >

            <div
              style={{
                fontSize:
                  "70px"
              }}
            >
              ✅
            </div>

            <h2>
              Application Submitted
            </h2>

            <p
              style={{
                margin:
                  "20px 0 30px",
                color:
                  "var(--text-secondary)"
              }}
            >
              Thank you for
              applying to
              <strong>
                {" "}
                {position}
              </strong>

              <br />

              Our recruitment
              team will review
              your application.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                justifyContent:
                  "center"
              }}
            >

              <button
                className="btn-secondary"
                onClick={() =>
                  navigate(
                    "/careers"
                  )
                }
              >
                View Careers
              </button>

              <button
                className="btn-primary"
                onClick={() =>
                  navigate("/")
                }
              >
                Back Home
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Apply;