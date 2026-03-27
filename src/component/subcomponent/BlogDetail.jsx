import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { Helmet} from 'react-helmet-async';
import API_URL from "../../config/config";
// ✅ Format Date Function
const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};

const BlogDetail = () => {
  const { id: slug } = useParams(); // Slug from URL
  const location = useLocation();

  const [blog, setBlog] = useState(location.state?.blog || null);
  const [loading, setLoading] = useState(!location.state?.blog);
  const [error, setError] = useState(null);

  const blogId = location.state?.blogId; // ID passed from LatestThreeBlog component

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        let apiUrl = "";

        if (blogId) {
          apiUrl = `${API_URL}/blogs/${blogId}`;
        } else if (slug) {
          apiUrl = `${API_URL}/blogs`;
        } else {
          setError("Invalid blog URL. Please go back to blogs page.");
          setLoading(false);
          return;
        }

        const res = await fetch(apiUrl, { headers: { Accept: "application/json" } });
        const data = await res.json();

        if (res.ok) {
          if (blogId && data.blog) {
            setBlog(data.blog);
          } else if (!blogId && data.blogs) {
            const found = data.blogs.find(
              (b) =>
                b.title
                  ?.toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^\w-]+/g, "") === slug
            );
            if (found) setBlog(found);
            else setError("Blog not found for given slug.");
          } else {
            setError(data.message || "Failed to load blog details.");
          }
        } else {
          setError(data.message || "Error loading blog details.");
        }
      } catch (err) {
        console.error("Fetch blog error:", err);
        setError("Failed to fetch blog details.");
      } finally {
        setLoading(false);
      }
    };

    if (!blog) fetchBlog();
  }, [slug, blogId, blog]);

  // ✅ SEO Meta Tags
  const pageTitle = blog
    ? `${blog.title} | IT Solutions Agency`
    : "Blog Details | IT Solutions Agency";

  const pageDescription = blog
    ? blog.title || blog.heading
    : "Explore insights and expert articles on IT solutions, digital strategy, and technology trends.";

  const pageUrl = blog
    ? `https://purvsoft.com/blog/${slug}`
    : "https://purvsoft.com/blog";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        {blog?.image && (
          <meta
            property="og:image"
            content={
              blog.image.startsWith("http")
                ? blog.image
                : `https://blog.purvsoft.com/${blog.image}`
            }
          />
        )}
      </Helmet>

      <div className="blog-detail-main">
        <div className="blog-detail-container">
          {loading ? (
            <div className="loader"></div>
          ) : error ? (
            <div className="blog-error-container">
              <p style={{ color: "red" }}>{error}</p>
              <Link to="/blogs" className="blog-back-button">
                Back to Blogs
              </Link>
            </div>
          ) : !blog ? (
            <div className="blog-error-container">
              <p>Blog not found.</p>
              <Link to="/blogs" className="blog-back-button">
                Back to Blogs
              </Link>
            </div>
          ) : (
            <div className="blog-detail">
              <h1 className="blog-detail-title">
                {blog.title || blog.heading}
              </h1>

              <div className="blog-detail-meta">
                {/* <p>
                  <strong>Author:</strong> {blog.author_name || "Unknown"}
                </p> */}
                <p>
                  <strong>Published:</strong> {formatDate(blog.created_at)}
                </p>
              </div>

              {blog.image && (
                <div className="blog-detail-image">
                  <img
                    src={
                      blog.image?.startsWith("http")
                        ? blog.image
                        : `https://blog.purvsoft.com/${blog.image}`
                    }
                    alt={blog.title || "Blog thumbnail"}
                  />
                </div>
              )}

              <div
                className="blog-detail-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              <div className="blog-detail-actions">
                <Link to="/blog" className="blog-back-button">
                  Back to Blogs
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
