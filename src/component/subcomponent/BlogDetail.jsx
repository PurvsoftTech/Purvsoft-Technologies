import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Calendar,
  ArrowLeft,
  Linkedin,
  Instagram,
  ChevronLeft,
  TrendingUp,
} from "lucide-react";
import "../../css/BlogDetail.css";

// ✅ Point directly to blog API to avoid CORS issues
const BLOG_API = "https://blog.purvsoft.com";

/* ── Utility helpers ─────────────────────────────────────────── */
const formatDate = (dateStr) => {
  if (!dateStr) return "Recent";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getReadingTime = (content) => {
  if (!content) return "5 min read";
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  return `${Math.ceil(words / 200)} min read`;
};

const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
};

const generateSlug = (title) => {
  if (!title) return "";
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

/* ── Component ───────────────────────────────────────────────── */
const BlogDetail = () => {
  const { id: slug } = useParams();
  const location = useLocation();

  const [blog, setBlog]               = useState(location.state?.blog || null);
  const [loading, setLoading]         = useState(!location.state?.blog);
  const [error, setError]             = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  // ✅ Removed unused `likesCount` state (was causing no-unused-vars warning)

  const blogId = location.state?.blogId;

  /* ── fetchRelatedPosts — useCallback so it's safe in deps ─── */
  const fetchRelatedPosts = useCallback(
    async (category) => {
      try {
        const res = await fetch(`${BLOG_API}/api/blogs`, {
          headers: { Accept: "application/json" },
          mode: "cors",
          credentials: "omit",
        });
        const data = await res.json();
        if (res.ok && data.blogs) {
          const related = data.blogs
            .filter((b) => b.id !== blogId && b.category === category)
            .slice(0, 3);
          setRelatedPosts(related);
        }
      } catch (err) {
        console.error("Error fetching related posts:", err);
      }
    },
    [blogId] // ✅ only dep is blogId — stable after first render
  );

  /* ── fetchBlog — useCallback so useEffect dep is satisfied ── */
  const fetchBlog = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      let apiUrl = "";
      if (blogId) {
        apiUrl = `${BLOG_API}/api/blogs/${blogId}`;
      } else if (slug) {
        apiUrl = `${BLOG_API}/api/blogs`;
      } else {
        setError("Invalid blog URL. Please go back to blogs page.");
        setLoading(false);
        return;
      }

      const res = await fetch(apiUrl, {
        headers: { Accept: "application/json" },
        mode: "cors",
        credentials: "omit",
      });
      const data = await res.json();

      if (res.ok) {
        if (blogId && data.blog) {
          setBlog(data.blog);
          fetchRelatedPosts(data.blog.category);
        } else if (!blogId && data.blogs) {
          const found = data.blogs.find(
            (b) => generateSlug(b.title) === slug
          );
          if (found) {
            setBlog(found);
            fetchRelatedPosts(found.category);
          } else {
            setError("Blog not found for given slug.");
          }
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
  }, [slug, blogId, fetchRelatedPosts]); // ✅ all deps declared

  /* ── useEffect — all deps now stable references ──────────── */
  useEffect(() => {
    if (!blog) fetchBlog();
  }, [blog, fetchBlog]); // ✅ no ESLint warning

  const handleShare = (platform) => {
    const links = {
      linkedin: "https://www.linkedin.com/company/purvsoft-tech/posts/?feedView=all",
      instagram: "https://www.instagram.com/purv_soft/",
    };
    if (links[platform]) window.open(links[platform], "_blank", "noopener,noreferrer");
  };

  /* ── SEO variables ───────────────────────────────────────── */
  const currentUrl      = `https://www.purvsoft.com/blog/${slug}`;
  const blogTitle       = blog?.title || blog?.heading || "Blog Details";
  const blogDescription = stripHtml(blog?.content || blog?.meta_description || blog?.title || "").substring(0, 160);
  const blogImage       = blog?.image
    ? blog.image.startsWith("http") ? blog.image : `${BLOG_API}/${blog.image}`
    : "https://www.purvsoft.com/og-blog-default.jpg";
  const blogKeywords    = blog?.meta_keywords || `${blogTitle}, web development, digital marketing, Purvsoft Technologies`;
  const publishedDate   = blog?.created_at || new Date().toISOString();
  const modifiedDate    = blog?.updated_at  || publishedDate;
  const authorName      = blog?.author_name || "Purvsoft Team";
  const readingTime     = getReadingTime(blog?.content);
  const category        = blog?.category || "Technology";

  /* ── Structured data ─────────────────────────────────────── */
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blogTitle,
    description: blogDescription,
    url: currentUrl,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: { "@type": "Person", name: authorName, url: "https://www.purvsoft.com" },
    publisher: {
      "@type": "Organization",
      name: "Purvsoft Technologies",
      logo: { "@type": "ImageObject", url: "https://www.purvsoft.com/logo.png" },
    },
    image: blogImage,
    mainEntityOfPage: { "@type": "WebPage", "@id": currentUrl },
    keywords: blogKeywords,
    articleSection: category,
    wordCount: blog?.content ? blog.content.replace(/<[^>]*>/g, "").split(/\s+/).length : 0,
    timeRequired: readingTime,
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.purvsoft.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.purvsoft.com/blog" },
      { "@type": "ListItem", position: 3, name: blogTitle, item: currentUrl },
    ],
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Purvsoft Technologies",
    url: "https://www.purvsoft.com",
    logo: "https://www.purvsoft.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
  };

  /* ── Loading state ───────────────────────────────────────── */
  if (loading) {
    return (
      <div className="blog-detail-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading article...</p>
        </div>
      </div>
    );
  }

  /* ── Error state ─────────────────────────────────────────── */
  if (error || !blog) {
    return (
      <div className="blog-detail-container">
        <div className="error-container">
          <div className="error-icon">📄</div>
          <h2>Article Not Found</h2>
          <p>{error || "The blog post you're looking for doesn't exist or has been moved."}</p>
          <Link to="/blog" className="back-home-btn">
            <ArrowLeft size={18} />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  /* ── Render ──────────────────────────────────────────────── */
  return (
    <>
      <Helmet>
        <title>{blogTitle} | Purvsoft Technologies Blog</title>
        <meta name="title"       content={`${blogTitle} | Purvsoft Technologies Blog`} />
        <meta name="description" content={blogDescription} />
        <meta name="keywords"    content={blogKeywords} />
        <meta name="author"      content={authorName} />
        <meta name="robots"      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical"    href={currentUrl} />

        <meta property="og:type"                   content="article" />
        <meta property="og:url"                    content={currentUrl} />
        <meta property="og:title"                  content={blogTitle} />
        <meta property="og:description"            content={blogDescription} />
        <meta property="og:image"                  content={blogImage} />
        <meta property="og:image:alt"              content={blogTitle} />
        <meta property="og:site_name"              content="Purvsoft Technologies" />
        <meta property="og:locale"                 content="en_US" />
        <meta property="article:published_time"    content={publishedDate} />
        <meta property="article:modified_time"     content={modifiedDate} />
        <meta property="article:author"            content={authorName} />
        <meta property="article:section"           content={category} />

        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:url"         content={currentUrl} />
        <meta name="twitter:title"       content={blogTitle} />
        <meta name="twitter:description" content={blogDescription} />
        <meta name="twitter:image"       content={blogImage} />
        <meta name="twitter:image:alt"   content={blogTitle} />

        <meta name="google-site-verification" content="MjMKilzhOmqr6Txi7pbjACF6g_hSt-B6Ej496yJyrH0" />
        <meta name="msvalidate.01"            content="AD0DF443696FB452E952416667F1A8DC" />
        <meta name="geo.region"    content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="viewport"      content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <script type="application/ld+json">{JSON.stringify(organizationData)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      <script type="application/ld+json">{JSON.stringify(blogStructuredData)}</script>

      <div className="blog-detail-page">
        <div className="blog-detail-container">

          <Link to="/blog" className="back-button">
            <ChevronLeft size={18} />
            Back to all articles
          </Link>

          <article className="blog-article">
            <div className="article-category">{category}</div>

            <h1 className="article-title">{blogTitle}</h1>

            <div className="article-meta">
              <div className="meta-left">
                <div className="author-info">
                  <div className="author-avatar">
                    {authorName.charAt(0).toUpperCase()}
                  </div>
                  <div className="author-details">
                    <span className="author-name">{authorName}</span>
                    <span className="author-title">Content Writer</span>
                  </div>
                </div>
              </div>
              <div className="meta-right">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{formatDate(blog.created_at)}</span>
                </div>
              </div>
            </div>

            {blog.image && (
              <div className="article-image">
                <img src={blogImage} alt={blogTitle} />
              </div>
            )}

            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <div className="article-footer">
              <div className="interaction-section">
                <div className="share-section">
                  <span className="share-label">Share:</span>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="share-btn linkedin"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={18} />
                  </button>
                  <button
                    onClick={() => handleShare("instagram")}
                    className="share-btn instagram"
                    aria-label="Share on Instagram"
                  >
                    <Instagram size={18} />
                  </button>
                </div>
                <Link to="/blog" className="back-home-btn">
                  <ArrowLeft size={18} />
                  Back to Blogs
                </Link>
              </div>
            </div>
          </article>

          {relatedPosts.length > 0 && (
            <div className="related-posts">
              <h3 className="related-title">
                <TrendingUp size={18} />
                You might also like
              </h3>
              <div className="related-grid">
                {relatedPosts.map((post) => (
                  <Link
                    to={`/blog/${generateSlug(post.title)}`}
                    key={post.id}
                    className="related-card"
                    state={{ blogId: post.id, blog: post }}
                  >
                    {post.image && (
                      <div className="related-image">
                        <img
                          src={
                            post.image.startsWith("http")
                              ? post.image
                              : `${BLOG_API}/${post.image}`
                          }
                          alt={post.title}
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="related-content">
                      <h4>{post.title}</h4>
                      <span className="related-date">
                        {formatDate(post.created_at)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default BlogDetail;