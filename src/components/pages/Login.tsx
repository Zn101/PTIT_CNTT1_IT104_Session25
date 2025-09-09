export default function Login() {
  return (
    <div>
      <div className="card p-4 shadow rounded-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h4 className="card-title text-center mb-4 fw-semibold">Login account</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-medium">
              Your email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@company.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-medium">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login an account
          </button>
        </form>

        <p className="text-center text-muted mt-3">
          Don't have an account?{" "}
          <a href="#" className="text-decoration-none">
            Register here
          </a>
        </p>
      </div>
    </div>
  )
}