import React, { useState } from "react";
import { useBlog } from "../contexts/BlogContext";
import EditBlogModal from "./EditBlogModal";
import "../styles/admin-manage-blogs.css";
import { toast } from "react-toastify";
import {imageBaseURL } from "../../config/config";
const ViewBlogModal = ({ blog, onClose }) => {
  return (
    <div className="admin-modal-overlay">
      <div className="admin-view-modal">
        <h3 className="admin-view-title">{blog.title }</h3>
        <div className="admin-view-content">
          <div className="admin-view-image">
            <img
              src={
                blog.image?.startsWith("http")
                  ? blog.image
                  : `${imageBaseURL}${blog.image}`
              }
              alt={blog.title || "Blog thumbnail"}
            />
          </div>
          <div className="admin-view-details">
            <p><strong>Author:</strong> {blog.author_name}</p>
            <p><strong>Created At:</strong> {new Date(blog.created_at).toLocaleString()}</p>
            <p><strong>Content:</strong></p>
            <div 
              className="admin-view-content-text"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
        <div className="admin-view-actions">
          <button
            onClick={onClose}
            className="admin-button-secondary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const ManageBlogs = () => {
  const { fetchblogs, deleteBlog, updateBlog } = useBlog();
  const [editingBlog, setEditingBlog] = useState(null);
  const [deletingBlog, setDeletingBlog] = useState(null);
  const [viewingBlog, setViewingBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDelete = (blogId) => {
    setDeletingBlog(blogId);
  };

  const confirmDelete = async () => {
    if (deletingBlog) {
      try {
        setLoading(true);
        await deleteBlog(deletingBlog);
      } catch (error) {
        toast.error("Failed to delete blog. Try again.");
      } finally {
        setDeletingBlog(null);
        setLoading(false);
      }
    }
  };

  const cancelDelete = () => {
    setDeletingBlog(null);
  };

  const handleSave = async (id, formData) => {
    try {
      setLoading(true);
      await updateBlog(id, formData);
      setEditingBlog(null);
    } catch (error) {
      toast.error("Failed to update blog.");
      console.error("Update error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-manage-blogs">
      <div className="admin-manage-header">
        <h1 className="admin-manage-title">Manage Blogs</h1>
        <p className="admin-manage-subtitle">Edit or delete your blog posts</p>
      </div>

      <div className="admin-blogs-list">
        {fetchblogs.length === 0 ? (
          <div className="admin-empty-state">
            <p>No blogs found. Create your first blog post!</p>
          </div>
        ) : (
          <div className="admin-blog-items">
            {[...fetchblogs]
              .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
              .map((blog) => (
                <div key={blog.id} className="admin-blog-item">
                  <div className="admin-blog-thumbnail">
                    <img
                      src={
                        blog.image?.startsWith("http")
                          ? blog.image
                          : `${imageBaseURL }${blog.image}`
                      }
                      alt={blog.title || "Blog thumbnail"}
                    />
                  </div>

                  <div className="admin-blog-details">
                    <h3 className="admin-blog-item-heading">
                      {blog.title || blog.heading}
                    </h3>
                    <div className="admin-blog-item-meta">
                      <span className="admin-blog-item-author">
                        {blog.author_name}
                      </span>
                    </div>
                  </div>

                  <div className="admin-blog-actions">
                    <button
                      onClick={() => setViewingBlog(blog)}
                      className="admin-action-button admin-view-button"
                      disabled={loading}
                    >
                      👁️ View
                    </button>
                    <button
                      onClick={() => setEditingBlog(blog)}
                      className="admin-action-button admin-edit-button"
                      disabled={loading}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="admin-action-button admin-delete-button"
                      disabled={loading}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {editingBlog && (
        <EditBlogModal
          blog={editingBlog}
          onClose={() => setEditingBlog(null)}
          onSave={handleSave}
        />
      )}

      {deletingBlog && (
        <div className="admin-modal-overlay">
          <div className="admin-delete-modal">
            <h3 className="admin-delete-title">Confirm Delete</h3>
            <p className="admin-delete-message">
              Are you sure you want to delete this blog post? This action cannot
              be undone.
            </p>
            <div className="admin-delete-actions">
              <button
                onClick={cancelDelete}
                className="admin-button-secondary"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="admin-button-danger"
                disabled={loading}
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {viewingBlog && (
        <ViewBlogModal
          blog={viewingBlog}
          onClose={() => setViewingBlog(null)}
        />
      )}
    </div>
  );
};

export default ManageBlogs;