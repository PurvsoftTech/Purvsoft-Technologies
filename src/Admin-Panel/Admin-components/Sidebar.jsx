import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/admin-sidebar.css";

const Sidebar = () => {
  const navItems = [
    { path: "/admin/dashboard", label: "Dashboard", icon: "📊" },
    { path: "/admin/upload-blog", label: "Upload Blog", icon: "✍️" },
    { path: "/admin/manage-blogs", label: "Manage Blogs", icon: "🧾" },
    { path: "/admin/account", label: "Account Center", icon: "👤" },
  ];

  return (
    <>
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <h1 className="admin-sidebar-title">Admin Panel</h1>
        </div>

        <nav className="admin-sidebar-nav">
          <ul className="admin-nav-list">
            {navItems.map((item) => (
              <li key={item.path} className="admin-nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `admin-nav-link ${isActive ? "admin-nav-link-active" : ""}`
                  }
                >
                  <span className="admin-nav-icon">{item.icon}</span>
                  <span className="admin-nav-text">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
