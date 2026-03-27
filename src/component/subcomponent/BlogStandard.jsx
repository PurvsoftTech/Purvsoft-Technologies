import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaUser, FaTags } from "react-icons/fa";
import API_URL from "../../config/Allsend";
import "../../css/BlogStandard.css"; // We'll create this CSS file
import { Helmet} from 'react-helmet-async';

// Utility functions
const slugify = (title) =>
  title
    ?.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};

const truncateText = (text, maxLength = 150) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + "...";
};

const BlogStandard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

 const fetchBlogs = async (page = 1) => {
  try {
    setLoading(true);

    const res = await fetch(
      `${API_URL}/blog/list?page=${page}`,
      {
        headers: { Accept: "application/json" },
      }
    );

    const data = await res.json();
    console.log("API RESPONSE:", data);

    if (res.ok) {
      setBlogs(data.data || []);
      setTotalPages(data.last_page || 1);
      setError(null);
    } else {
      setError(data.message || "Failed to fetch blogs");
      setBlogs([]);
    }
  } catch (err) {
    console.error(err);
    setError("Failed to fetch blogs");
    setBlogs([]);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Skeleton loader for better UX
  const SkeletonLoader = () => (
    <div className="blog-grid">
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div key={n} className="blog-card skeleton">
          <div className="skeleton-image"></div>
          <div className="blog-content">
            <div className="skeleton-date"></div>
            <div className="skeleton-title"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-footer"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Helmet>
      <title>Blog | Purvsoft Technologies – Digital Marketing & Tech Insights</title>
      <meta name="description" content="Read the latest articles on digital marketing, web development, SEO, social media, and technology trends from the Purvsoft Technologies team of experts." />
      <meta name="keywords" content="digital marketing blog, web development tips, SEO articles, tech blog, Purvsoft Technologies blog, marketing insights" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.purvsoft.com/blog" />
 
      <meta property="og:title" content="Blog | Purvsoft Technologies – Digital Marketing & Tech Insights" />
      <meta property="og:description" content="Read the latest articles on digital marketing, web development, SEO, and technology trends." />
      <meta property="og:url" content="https://www.purvsoft.com/blog" />
      <meta property="og:image" content="https://www.purvsoft.com/og-image.jpg" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Blog | Purvsoft Technologies" />
      <meta name="twitter:description" content="Digital marketing and tech insights from Purvsoft Technologies experts." />
    </Helmet>

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">
            Our Blog
            <span className="blog-hero-subtitle">Insights & Updates</span>
          </h1>
          <p className="blog-hero-description">
            Discover the latest trends, tips, and insights from our expert team
            about technology, digital marketing, and business growth.
          </p>
        </div>
        <div className="blog-hero-overlay"></div>
      </section>

      {/* Main Blog Section */}
      <section className="blog-section">
        <div className="blog-container">
          {/* Search and Filter Bar - Optional */}
          <div className="blog-toolbar">
            <div className="blog-search">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="blog-search-input"
              />
            </div>
          </div>

          {/* Blog Grid */}
          {loading ? (
            <SkeletonLoader />
          ) : error ? (
            <div className="blog-error">
              <p>{error}</p>
              <button onClick={() => fetchBlogs(currentPage)} className="retry-btn">
                Try Again
              </button>
            </div>
          ) : blogs.length === 0 ? (
            <div className="blog-empty">
              <h3>No blogs available</h3>
              <p>Check back later for new content!</p>
            </div>
          ) : (
            <>
              <div className="blog-grid">
                {[...blogs]
                  .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                  .map((blog, index) => {
                    const slug = slugify(blog.title || blog.heading);
                    const blogUrl = `/blog/${blog.title
                      ?.toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^\w-]+/g, "")}`;

                    return (
                      <article 
                        key={`blog-${blog.id}-${index}`}
                        className="blog-card"
                      >
                        <Link to={blogUrl} state={{ blogId: blog.id, blog }}>
                          {/* Blog Image */}
                          <div className="blog-image-wrapper">
                            <img
                              src={
                                blog.image?.startsWith("http")
                                  ? blog.image
                                  : `https://blog.purvsoft.com/${blog.image}`
                              }
                              alt={blog.title || "Blog thumbnail"}
                              className="blog-image"
                              loading="lazy"
                              onError={(e) => {
                                e.target.src = "https://via.placeholder.com/400x250?text=Blog+Image";
                              }}
                            />
                            <div className="blog-image-overlay">
                              <span className="read-more-text">Read Article</span>
                            </div>
                          </div>

                          {/* Blog Content */}
                          <div className="blog-content">
                            <div className="blog-meta">
                              <span className="blog-date">
                                <FaCalendarAlt className="meta-icon" />
                                {formatDate(blog.created_at)}
                              </span>
                              {blog.user_id && (
                                <span className="blog-author">
                                  <FaUser className="meta-icon" />
                                  Admin
                                </span>
                              )}
                            </div>

                            <h2 className="blog-title">{blog.title}</h2>
                            
                            {blog.heading && (
                              <h3 className="blog-subtitle">{blog.heading}</h3>
                            )}

                            {blog.content && (
                              <p className="blog-excerpt">
                                {truncateText(blog.content.replace(/<[^>]*>/g, ''), 120)}
                              </p>
                            )}

                            {blog.keywords && (
                              <div className="blog-tags">
                                <FaTags className="tags-icon" />
                                <span className="blog-keywords">
                                  {blog.keywords.split(',').slice(0, 3).join(', ')}
                                </span>
                              </div>
                            )}

                            <div className="blog-footer">
                              <span className="read-more-link">
                                Read More <FaArrowRight className="arrow-icon" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      </article>
                    );
                  })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="blog-pagination">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="pagination-btn prev"
                  >
                    Previous
                  </button>
                  
                  {[...Array(totalPages).keys()].map(num => (
                    <button
                      key={num + 1}
                      onClick={() => handlePageChange(num + 1)}
                      className={`pagination-btn ${currentPage === num + 1 ? 'active' : ''}`}
                    >
                      {num + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="pagination-btn next"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="blog-newsletter">
        <div className="newsletter-container">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest insights and updates</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default BlogStandard;