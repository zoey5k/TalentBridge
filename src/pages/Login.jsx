function Login() {
  return (
    <div
      className="card p-4 shadow text-center"
      style={{ maxWidth: "400px", margin: "auto" }}
    >
      <h2 className="mb-3">Login</h2>
      <div className="mb-3">
        <input
          className="form-control"
          name="username"
          placeholder="Username"
          // value={form.username}
          // onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          name="password"
          placeholder="Password"
          // value={form.password}
          // onChange={handleChange}
          required
        />
      </div>
      <button className="btn btn-primary w-100">Sign in</button>
    </div>
  );
}

export default Login;
