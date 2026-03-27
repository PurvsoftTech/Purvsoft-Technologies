import React, { useEffect, useState } from 'react';
import '../css/Latested.css';
import { useNavigate } from 'react-router-dom';
const Latested = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/blog'); // Navigates to the '/about' route
  };
  const statsData = [
    { value: "8+", label: "Years of Experience" },
    { value: "250+", label: "Happy Clients" },
    { value: "400+", label: "Finished Projects" },
    { value: "25+", label: "Skilled Experts" }
  ];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://blog.purvsoft.com/api/blog/list");

      if (!response.ok) {
        throw new Error("Failed to fetch blog data");
      }

      const data = await response.json();

      // agar API array return kare to direct use hoga
      // agar data.data me aaye to wo use hoga
      const blogs = Array.isArray(data) ? data : data.data || [];

      setBlogPosts(blogs);
    } catch (err) {
      console.error("Blog fetch error:", err);
      setError("Unable to load blog posts.");
    } finally {
      setLoading(false);
    }
  };

  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "");
  };

  const truncateText = (text, maxLength = 120) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div className="latested-container">
      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Header */}
      <div className="blog-header">
        <span className="blog-badge">BLOG</span>
        <h2 className="blog-title">Latest News & Articles</h2>
        <p className="blog-subtitle">
          Stay updated with our latest news and articles, where innovation meets information in the world of IT services.
        </p>
      </div>

      {/* Loading */}
      {loading && <p className="blog-status">Loading blogs...</p>}

      {/* Error */}
      {error && <p className="blog-status error">{error}</p>}

      {/* Blog Grid */}
      {!loading && !error && (
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-image">
                <img
                  src={`https://blog.purvsoft.com/${post.image}`}
                  alt={post.title || post.heading}
                />
              </div>

              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-date">
                    <i className="far fa-calendar-alt"></i>
                    {post.created_at ? new Date(post.created_at).toLocaleDateString() : "No Date"}
                  </span>
                </div>

                <h3 className="blog-post-title">
                  {post.title}
                </h3>

                <h4 className="blog-post-heading">
                  {post.heading}
                </h4>

                <p className="blog-post-description">
                  {truncateText(stripHtml(post.content), 140)}
                </p>

                <div className="blog-footer">
                  <button className="blog-read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* View All Button */}
      <div className="blog-view-all">
        <button className="view-all-btn" onClick={handleButtonClick}>
          View All Articles <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Latested;