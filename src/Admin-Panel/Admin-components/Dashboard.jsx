import React, { useEffect, useState } from "react";
import { useBlog } from "../contexts/BlogContext";
import "../styles/admin-dashboard.css";
import { Helmet } from "react-helmet";
import "../../Loader.css";

const Dashboard = () => {
  const { fetchblogs, error } = useBlog();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (fetchblogs) {
      setLoading(false);
    }
  }, [fetchblogs]);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  };

  return (
    <>
      <Helmet>
        <title>
          Admin Panel | IT Solutions | Creative IT Services & Business Growth &
          Digital Marketing
        </title>
      </Helmet>

      <div className="admin-dashboard">
        <div className="admin-dashboard-header">
          <h1 className="admin-dashboard-title">Dashboard</h1>
          <p className="admin-dashboard-subtitle">
            Overview of your blog content
          </p>
        </div>

        <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <div className="admin-stat-icon">📝</div>
            <div className="admin-stat-content">
              <h3 className="admin-stat-number">{fetchblogs?.length || 0}</h3>
              <p className="admin-stat-label">Total Blogs</p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">📈</div>
            <div className="admin-stat-content">
              <h3 className="admin-stat-number">
                {fetchblogs?.filter(
                  (blog) => blog.category === "Marketing"
                ).length || 0}
              </h3>
              <p className="admin-stat-label">Marketing</p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">📦</div>
            <div className="admin-stat-content">
              <h3 className="admin-stat-number">
                {fetchblogs?.filter(
                  (blog) => blog.category === "Operation"
                ).length || 0}
              </h3>
              <p className="admin-stat-label">Operation</p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">🎨</div>
            <div className="admin-stat-content">
              <h3 className="admin-stat-number">
                {fetchblogs?.filter((blog) => blog.category === "Creative")
                  .length || 0}
              </h3>
              <p className="admin-stat-label">Creative</p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">🏢</div>
            <div className="admin-stat-content">
              <h3 className="admin-stat-number">
                {fetchblogs?.filter((blog) => blog.category === "Business")
                  .length || 0}
              </h3>
              <p className="admin-stat-label">Business</p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">💻</div>
            <div className="admin-stat-content">
              <h3 className="admin-stat-number">
                {fetchblogs?.filter(
                  (blog) => blog.category === "Development"
                ).length || 0}
              </h3>
              <p className="admin-stat-label">Development</p>
            </div>
          </div>
        </div>

        <div className="admin-recent-blogs">
          <h2 className="admin-section-title">Recent Blogs</h2>
          {error && <p className="admin-error">{error}</p>}

          <div className="admin-blog-grid">
            {loading ? (
              <div className="loader"></div>
            ) : fetchblogs.length === 0 ? (
              <h1 style={{ color: "red" }}>
                Oops.. No Blogs Available (Add New Blogs)
              </h1>
            ) : (
              [...fetchblogs]
                .sort(
                  (a, b) => new Date(b.created_at) - new Date(a.created_at)
                )
                .map((blog) => (
                  <div key={blog.blog_id} className="admin-blog-card">
                    <div className="admin-blog-image">
                      <img src={blog.image?.startsWith("http")? blog.image: `https://blog.purvsoft.com/${blog.image}`}alt={blog.title || "Blog thumbnail"}/>
                    </div>
                    <div className="admin-blog-content">
                      <h3 className="admin-blog-heading">{blog.title}</h3>
                      <div className="admin-blog-meta">
                        <span className="admin-blog-category">
                          {blog.category}
                        </span>
                        <span className="admin-blog-date">
                          {formatDate(blog.created_at)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
