import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import BlogEditor from "./BlogEditor";
import "../styles/admin-edit-modal.css";
import {imageBaseURL } from "../../config/config";
const EditBlogModal = ({ blog, onClose, onSave }) => {
  const [formData, setFormData] = useState({
  title: "",
  title_tag: "",
  meta_description: "",
  keywords: "",
  url_title: "",
  content: "",
  image: null,
});
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || "",
      title_tag: blog.title_tag || "",
      meta_description: blog.meta_description || "",
      keywords: blog.keywords || "",
      url_title: blog.url_title || "",
      content: blog.content || "",
      });
      setImagePreview(
        blog.image?.startsWith("http")
          ? blog.image
          : `${imageBaseURL }${blog.image}` || ""
      );
    }
  }, [blog]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      if (file && file.type.startsWith("image/")) {
        if (file.size > 5 * 1024 * 1024) {
          toast.error("Image size must be less than 5MB!");
          return;
        }
        setFormData((prev) => ({ ...prev, image: file }));
        setImagePreview(URL.createObjectURL(file));
      } else {
        toast.error("Please select a valid image file (JPG, PNG, WEBP).");
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.title || !formData.content) {  
    toast.error("Title and Content required!");
    return;
  }

  const data = new FormData();
  data.append("title", formData.title);
  data.append("content", formData.content);
  data.append("title_tag", formData.title_tag || "");
  data.append("meta_description", formData.meta_description || "");
  data.append("keywords", formData.keywords || "");
  data.append("url_title", formData.url_title || "");

  if (formData.image) {
    data.append("image", formData.image);
  }
  onSave(blog.id, data);  
};

  return (
    <div className="admin-modal-overlay">
      <div className="admin-edit-modal">
        <div className="admin-edit-header">
          <h2 className="admin-edit-title">Edit Blog</h2>
          <button onClick={onClose} className="admin-close-button">×</button>
        </div>

        <form onSubmit={handleSubmit} className="admin-edit-form">
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label className="admin-form-label">Blog Title *</label>
              <input
                type="text"
                name="title"
                className="admin-form-input"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
          </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Title Tag (SEO)</label>
              <input
                type="text"
                name="title_tag"
                className="admin-form-input"
                value={formData.title_tag}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Meta Description</label>
              <textarea
                name="meta_description"
                className="admin-form-textarea"
                rows={3}
                value={formData.meta_description}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Keywords</label>
              <input
                type="text"
                name="keywords"
                className="admin-form-input"
                value={formData.keywords}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">URL Slug</label>
              <input
                type="text"
                name="url_title"
                className="admin-form-input"
                value={formData.url_title}
                onChange={handleChange}
              />
            </div>
          <div className="admin-form-group">
            <label className="admin-form-label">Upload Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="admin-form-file"
              onChange={handleChange}
            />
          </div>

          {imagePreview && (
            <div className="admin-image-preview">
              <img src={imagePreview} alt="Preview" className="admin-preview-image" />
            </div>
          )}

          <div className="admin-form-group">
            <label className="admin-form-label">Blog Content *</label>
            <BlogEditor
              value={formData.content}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, content: value }))
              }
            />
          </div>

          <div className="admin-form-actions">
            <button type="button" onClick={onClose} className="admin-button-secondary">
              Cancel
            </button>
            <button type="submit" className="admin-button-primary">
              Update Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlogModal;