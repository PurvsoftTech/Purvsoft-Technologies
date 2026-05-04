import React, { useEffect, useState, useCallback } from "react";
import "../css/Latested.css";
import { useNavigate } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const BLOG_API = "https://blog.purvsoft.com";

const Latested = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState("");
  const navigate = useNavigate();

  const statsData = [
    { value: "8+",   label: "Years of Experience" },
    { value: "400+", label: "Projects Delivered" },
    { value: "150+", label: "Happy Clients" },
    { value: "10+",  label: "Skilled Experts" },
  ];

  /* ── helpers ─────────────────────────────────────────────── */
  const slugify = (title) =>
    title
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "") ?? "";

  const stripHtml = (html) => (html ? html.replace(/<[^>]*>/g, "") : "");

  const truncateText = (text, max = 140) =>
    text && text.length > max ? text.substring(0, max) + "…" : text ?? "";

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith("http")) return imagePath;
    return `${BLOG_API}/${imagePath}`;
  };

  const extractBlogs = (data) => {
    const candidates = [
      data?.data?.data,
      data?.data,
      data?.blogs?.data,
      data?.blogs,
      data?.posts?.data,
      data?.posts,
      Array.isArray(data) ? data : null,
    ];
    for (const c of candidates) {
      if (Array.isArray(c) && c.length >= 0) return c;
    }
    return [];
  };

  /* ── ✅ useCallback makes fetchBlogs a stable reference ───── */
  const fetchBlogs = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${BLOG_API}/api/blog/list`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "omit",
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      const blogs = extractBlogs(data);

      if (!Array.isArray(blogs)) throw new Error("Unexpected response shape");

      setBlogPosts(blogs);
    } catch (err) {
      console.error("Blog fetch error:", err);
      setError("Unable to load blog posts. Please try again later.");
      setBlogPosts([]);
    } finally {
      setLoading(false);
    }
  }, []); // ✅ no external deps — stable on every render

  /* ── fetchBlogs is now a stable ref, ESLint warning gone ─── */
  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  /* ── Render ──────────────────────────────────────────────── */
  return (
    <div className="latested-container">

      {/* Stats */}
      <div className="stats-section" aria-label="Company Statistics">
        <div className="stats-grid">
          {statsData.map((stat, i) => (
            <div
              key={i}
              className="stat-item"
              data-aos="fade-up"
              data-aos-delay={i * 50}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Header */}
      <div className="blog-header" data-aos="fade-up">
        <span className="blog-badge">OUR BLOG</span>
        <h2 className="section-title">
          Latest News &amp; <span className="brand-gradient">Articles</span>
        </h2>
        <p className="blog-subtitle">
          Stay updated with our latest news, articles, and insights on technology,
          web development, digital marketing, and mobile app trends.
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="blog-status">
          <div className="loader"></div>
          <p>Loading latest articles…</p>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="blog-status error">
          <p>{error}</p>
          <button onClick={fetchBlogs} className="retry-btn">
            Try Again
          </button>
        </div>
      )}

      {/* Blog Grid */}
      {!loading && !error && blogPosts.length > 0 && (
        <>
          <div className="blog-grid">
            {[...blogPosts]
              .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
              .slice(0, 3)
              .map((post, index) => {
                const imageUrl = getImageUrl(post.image);
                return (
                  <div
                    key={post.id ?? index}
                    className="blog-card"
                    onClick={() =>
                      navigate(`/blog/${slugify(post.title)}`, {
                        state: { blogId: post.id, blog: post },
                      })
                    }
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    itemScope
                    itemType="https://schema.org/BlogPosting"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      navigate(`/blog/${slugify(post.title)}`, {
                        state: { blogId: post.id, blog: post },
                      })
                    }
                  >
                    <div className="blog-card-image">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={post.title}
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.classList.add("no-image");
                          }}
                          itemProp="image"
                        />
                      ) : (
                        <div className="blog-no-image">
                          <span>📝</span>
                        </div>
                      )}
                      {post.category && (
                        <span className="blog-category" itemProp="category">
                          {post.category}
                        </span>
                      )}
                    </div>

                    <div className="blog-card-content">
                      <div className="blog-meta">
                        <span className="blog-date">
                          <Calendar size={14} aria-hidden="true" />
                          <time dateTime={post.created_at} itemProp="datePublished">
                            {formatDate(post.created_at)}
                          </time>
                        </span>
                        <span className="blog-author">
                          <User size={14} aria-hidden="true" />
                          <span itemProp="author">
                            {post.author_name || "Purvsoft Team"}
                          </span>
                        </span>
                      </div>

                      <h3 className="blog-post-title" itemProp="headline">
                        {post.title}
                      </h3>

                      <p className="blog-post-description" itemProp="description">
                        {truncateText(stripHtml(post.content), 140)}
                      </p>

                      <div className="blog-footer">
                        <button
                          className="blog-read-more"
                          aria-label={`Read more about ${post.title}`}
                        >
                          Read More <ArrowRight size={14} aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="blog-view-all" data-aos="fade-up">
            <button
              className="view-all-btn"
              onClick={() => navigate("/blog")}
              aria-label="View all blog articles"
            >
              View All Articles <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </>
      )}

      {/* Empty */}
      {!loading && !error && blogPosts.length === 0 && (
        <div className="blog-status">
          <p>No blog posts available yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
};

export default Latested;