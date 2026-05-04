// AdminLogin - No changes needed, it's correct. After login, it navigates to dashboard.
// If you want to go directly to BlogForm after login, change navigate("/admin/dashboard") to navigate("/admin-upload-blog")
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/admin-login.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />; // Or change to "/admin-upload-blog" if BlogForm is main page
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await login(email.trim(), password);
      // console.log("login result:", result);

      if (result.success) {
        toast.success("Login successful! Redirecting...");
        // Token is now stored as new token every time
        // console.log("Token after login:", localStorage.getItem("apiToken"));
        navigate("/admin/dashboard"); // Change to BlogForm route if needed
      } else {
        const msg =
          result.message ||
          (result.errors && Object.values(result.errors).flat().join(", ")) ||
          "Invalid email or password.";
        toast.error(msg);
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Something went wrong. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid admin-login-container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow-lg p-4 admin-login-card" style={{ maxWidth: 420, width: "100%" }}>
        <div className="text-center mb-4 admin-login-header">
          <h1 className="fw-bold admin-login-title">Admin Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="mb-3 admin-form-group">
            <label htmlFor="email" className="form-label admin-form-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-control admin-form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@gmail.com"
              autoComplete="username"
            />
          </div>

          <div className="mb-3 admin-form-group">
            <label htmlFor="password" className="form-label admin-form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control admin-form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 admin-login-button" disabled={isLoading}>
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* <div className="text-center admin-login-info mt-3">
          <p className="fw-bold">Demo Credentials:</p>
          <p>Email: admin@gmail.com</p>
          <p>Password: 123456789</p>
        </div> */}
      </div>
    </div>
  );
};

export default AdminLogin;