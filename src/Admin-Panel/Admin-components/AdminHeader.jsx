import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/admin-header.css";

const AdminHeader = () => {
  const { user, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <header className="admin-header">
        <div className="admin-header-content">
          <div className="admin-header-left">
            <h2 className="admin-header-title">Purvsoft Technologies</h2>
          </div>

          <div className="admin-header-right">
            <div className="admin-theme-toggle">
              <button
                onClick={toggleTheme}
                className="admin-theme-button"
                aria-label="Toggle theme"
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>
            </div>

            <div className="admin-user-menu">
              <div className="admin-user-info">
                <img
                  src={
                    user?.profileImage ||
                    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
                  }
                  alt="Profile"
                  className="admin-user-avatar"
                />
                <span className="admin-user-email">
                  {user?.email ? `Hi, ${user.email.split("@")[0]}` : "Hi"}
                </span>
              </div>
              <button onClick={logout} className="admin-logout-button">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AdminHeader;
