import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaUser } from "react-icons/fa";
import "../../css/BlogStandard.css";
import { Helmet } from "react-helmet-async";

// ✅ Always point directly to the blog API origin to avoid CORS issues
const BLOG_API = "https://blog.purvsoft.com";

/* ── Utility helpers ─────────────────────────────────────────── */
const slugify = (title) =>
  title
    ?.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "") ?? "";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};

const stripHtml = (html) =>
  html ? html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim() : "";

/* ── Robust data extractor (same logic as Latested.js) ───────── */
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

const extractPagination = (data) => ({
  lastPage:    data?.blogs?.last_page    ?? data?.data?.last_page    ?? 1,
  currentPage: data?.blogs?.current_page ?? data?.data?.current_page ?? 1,
});

/* ── Skeleton ─────────────────────────────────────────────────── */
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

/* ── Component ────────────────────────────────────────────────── */
const BlogStandard = () => {
  const [blogs, setBlogs]               = useState([]);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState(null);
  const [currentPage, setCurrentPage]   = useState(1);
  const [totalPages, setTotalPages]     = useState(1);
  const [searchQuery, setSearchQuery]   = useState("");

  /* ── Fetch ─────────────────────────────────────────────────── */
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

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
      const { lastPage, currentPage } = extractPagination(data);

      setBlogs(blogs);
      setTotalPages(lastPage);
      setCurrentPage(currentPage);
    } catch (err) {
      console.error("BlogStandard fetch error:", err);
      setError("Failed to fetch blogs. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ── Derived data ──────────────────────────────────────────── */
  const filteredBlogs = searchQuery
    ? blogs.filter(
        (b) =>
          b.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          b.heading?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogs;

  const sortedBlogs = [...filteredBlogs].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  const latestBlogs = sortedBlogs.slice(0, 5);

  /* ── Structured data ───────────────────────────────────────── */
  const blogListStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Purvsoft Technologies Blog",
    description:
      "Latest insights on digital marketing, web development, SEO, and technology trends from Purvsoft Technologies experts.",
    url: "https://www.purvsoft.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Purvsoft Technologies",
      url: "https://www.purvsoft.com",
      logo: "https://www.purvsoft.com/logo.png",
    },
    blogPost: latestBlogs.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      url: `https://www.purvsoft.com/blog/${slugify(blog.title)}`,
      datePublished: blog.created_at,
      dateModified: blog.updated_at || blog.created_at,
      image: blog.image?.startsWith("http")
        ? blog.image
        : `${BLOG_API}/${blog.image}`,
      description: stripHtml(blog.content || blog.heading || "").substring(0, 160),
      author: {
        "@type": "Person",
        name: blog.author_name || "Purvsoft Team",
      },
    })),
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.purvsoft.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.purvsoft.com/blog" },
    ],
  };

  /* ── Pagination helper ─────────────────────────────────────── */
  const renderPagination = () => {
    const pages = [];
    for (let p = 1; p <= totalPages; p++) {
      if (
        p === 1 ||
        p === totalPages ||
        (p >= currentPage - 1 && p <= currentPage + 1)
      ) {
        pages.push(
          <button
            key={p}
            onClick={() => handlePageChange(p)}
            className={`pagination-btn ${currentPage === p ? "active" : ""}`}
            aria-label={`Page ${p}`}
            aria-current={currentPage === p ? "page" : undefined}
          >
            {p}
          </button>
        );
      } else if (p === 2 && currentPage > 3) {
        pages.push(<span key="e1" className="pagination-ellipsis">…</span>);
      } else if (p === totalPages - 1 && currentPage < totalPages - 2) {
        pages.push(<span key="e2" className="pagination-ellipsis">…</span>);
      }
    }
    return pages;
  };

  /* ── JSX ───────────────────────────────────────────────────── */
  return (
    <>
      <Helmet>
        <title>Blog | Digital Marketing &amp; Web Development Insights | Purvsoft Technologies</title>
        <meta name="description" content="Read expert articles on digital marketing, SEO, web development, mobile apps, and technology trends. Purvsoft Technologies blog offers actionable insights for business growth." />
        <meta name="keywords" content="digital marketing blog, web development tips, SEO articles, technology blog, Purvsoft blog, tech insights India" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="author" content="Purvsoft Technologies" />
        <link rel="canonical" href="https://www.purvsoft.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.purvsoft.com/blog" />
        <meta property="og:title" content="Blog | Purvsoft Technologies" />
        <meta property="og:description" content="Expert articles on digital marketing, SEO, web development, and technology trends." />
        <meta property="og:image" content="https://www.purvsoft.com/og-blog.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Purvsoft Technologies" />
        <meta name="twitter:description" content="Expert articles on digital marketing, SEO, web development, and technology trends." />
        <meta name="twitter:image" content="https://www.purvsoft.com/twitter-blog.jpg" />
        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
      </Helmet>

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      {blogs.length > 0 && (
        <script type="application/ld+json">{JSON.stringify(blogListStructuredData)}</script>
      )}

      {/* Hero */}
      <section className="blog-hero" aria-label="Blog Hero Section">
        <div className="blog-hero-content" data-aos="fade-up">
          <h1 className="blog-hero-title">
            Purvsoft Technologies Blog
            <span className="blog-hero-subtitle">Expert Insights &amp; Industry Updates</span>
          </h1>
          <p className="blog-hero-description">
            Discover the latest trends, tips, and insights from our expert team about digital marketing,
            web development, mobile apps, SEO, and business growth strategies.
          </p>
        </div>
        <div className="blog-hero-overlay"></div>
      </section>

      {/* Main */}
      <section className="blog-section" aria-label="All Blog Posts">
        <div className="blog-container">

          {/* Search */}
          <div className="blog-toolbar">
            <div className="blog-search">
              <input
                type="text"
                placeholder="Search articles by title…"
                className="blog-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search blog posts"
              />
            </div>
          </div>

          {/* States */}
          {loading ? (
            <SkeletonLoader />
          ) : error ? (
            <div className="blog-error">
              <p>{error}</p>
              <button onClick={fetchBlogs} className="retry-btn">
                Try Again
              </button>
            </div>
          ) : sortedBlogs.length === 0 ? (
            <div className="blog-empty">
              <h3>No blogs found</h3>
              <p>
                {searchQuery
                  ? `No results for "${searchQuery}"`
                  : "Check back later for new content!"}
              </p>
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="clear-search">
                  Clear Search
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Grid */}
              <div className="blog-grid">
                {sortedBlogs.map((blog, index) => {
                  const blogUrl = `/blog/${slugify(blog.title)}`;
                  const imgSrc = blog.image?.startsWith("http")
                    ? blog.image
                    : `${BLOG_API}/${blog.image}`;

                  return (
                    <article
                      key={`blog-${blog.id ?? index}`}
                      className="blog-card"
                      data-aos="fade-up"
                      data-aos-delay={(index % 6) * 50}
                      itemScope
                      itemType="https://schema.org/BlogPosting"
                    >
                      <Link to={blogUrl} state={{ blogId: blog.id, blog }}>
                        {/* Image */}
                        <div className="blog-image-wrapper">
                          {blog.image ? (
                            <img
                              src={imgSrc}
                              alt={blog.title || "Blog thumbnail"}
                              className="blog-image"
                              loading="lazy"
                              itemProp="image"
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.parentElement.classList.add("no-image");
                              }}
                            />
                          ) : (
                            <div className="blog-no-image">
                              <span>📝</span>
                            </div>
                          )}
                          <div className="blog-image-overlay">
                            <span className="read-more-text">Read Article</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="blog-content">
                          <div className="blog-meta">
                            <span className="blog-date">
                              <FaCalendarAlt className="meta-icon" aria-hidden="true" />
                              <time dateTime={blog.created_at} itemProp="datePublished">
                                {formatDate(blog.created_at)}
                              </time>
                            </span>
                            <span className="blog-author">
                              <FaUser className="meta-icon" aria-hidden="true" />
                              <span itemProp="author">
                                {blog.author_name || "Purvsoft Team"}
                              </span>
                            </span>
                          </div>

                          <h2 className="blog-title" itemProp="headline">
                            {blog.title}
                          </h2>

                          <div className="blog-footer">
                            <span className="read-more-link">
                              Read More <FaArrowRight className="arrow-icon" aria-hidden="true" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && !searchQuery && (
                <div className="blog-pagination" aria-label="Blog pagination">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="pagination-btn prev"
                    aria-label="Previous page"
                  >
                    Previous
                  </button>
                  {renderPagination()}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="pagination-btn next"
                    aria-label="Next page"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogStandard;