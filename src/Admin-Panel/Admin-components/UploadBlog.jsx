import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext'; // Path adjust karo
import BlogEditor from './BlogEditor';
import '../styles/admin-upload-blog.css';
import API_URL from '../../config/config';
const API_BASE = `${API_URL}`; 

const BlogForm = () => {
  const { token, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

const [formData, setFormData] = useState({
  title: '',
  heading: '',
  title_tag: '',
  meta_description: '',
  keywords: '',
  url_title: '',
  content: '',
  image: null,
});


  const [imagePreview, setImagePreview] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef(null);
  const dropAreaRef = useRef(null);

  // Initial auth check - sirf page load pe check, agar nahi logged in to redirect
  useEffect(() => {
    if (!isAuthenticated || !token) {
      toast.error('Please login first.');
      navigate('/login'); // Sirf yaha navigate, handleSubmit me nahi
    } else {
      console.log('BlogForm loaded with token:', token.substring(0, 20) + '...');
    }
  }, [isAuthenticated, token, navigate]);

  // Drag and drop handlers (same as before)
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!dropAreaRef.current?.contains(e.relatedTarget)) {
      setIsDragging(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelection(files[0]);
    }
  };

  const handleFileSelection = (file) => {
    if (file && file.type.startsWith('image/')) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size must be less than 5MB!');
        return;
      }
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      toast.error('Please select a valid image file (JPG, PNG, WEBP).');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelection(file);
    }
  };

  const handleEditorChange = (value) => {
    setFormData((prev) => ({ ...prev, content: value }));
  };

  const handleReset = () => {
  setFormData({
    title: '',
    heading: '',
    title_tag: '',
    meta_description: '',
    keywords: '',
    url_title: '',
    content: '',
    author_name: '',
    image: null,
  });

  setImagePreview('');
  setIsDragging(false);

  if (fileInputRef.current) {
    fileInputRef.current.value = '';
  }

  setResponseMessage('');
  setIsError(false);
};


  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const {
    title,
    heading,
    title_tag,
    meta_description,
    keywords,
    url_title,
    content,
    author_name,
    image,
  } = formData;

  // ✅ Validation
  if (
    !title ||
    !heading ||
    !title_tag ||
    !meta_description ||
    !keywords ||
    !url_title ||
    !content ||
    !image
  ) {
    toast.error('Please fill in all required fields!');
    console.log('Form data is invalid:', formData);
    setLoading(false);
    return;
  }

  try {
    const data = new FormData();

    // ✅ REQUIRED API FIELDS
    data.append('title', title);
    data.append('heading', heading);
    data.append('title_tag', title_tag);
    data.append('meta_description', meta_description);
    data.append('keywords', keywords);
    data.append('url_title', url_title);
    data.append('content', content);
    data.append('author_name', author_name);
    data.append('image', image);

    const response = await fetch(`${API_BASE}/blog/create`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    const text = await response.text();
    let result;

    try {
      result = JSON.parse(text);
    } catch {
      toast.error('Invalid server response');
      setLoading(false);
      return;
    }

    if (response.ok) {
      toast.success(result.message || 'Blog uploaded successfully!');
      setResponseMessage('Blog uploaded successfully!');
      setIsError(false);
      handleReset();
    } else {
      let errorMessage = result.message || `Error ${response.status}`;

      if (response.status === 401) {
        errorMessage = 'Session expired. Logging out...';
        logout();
      }

      toast.error(errorMessage);
      setResponseMessage(errorMessage);
      setIsError(true);
    }
  } catch (error) {
    toast.error('Failed to upload blog');
    setIsError(true);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="admin-upload-blog">
      <div className="admin-upload-header">
        <div className="header-gradient-bg">
          <h1 className="admin-upload-title">Create New Blog Post</h1>
          <p className="admin-upload-subtitle">Share your thoughts and ideas with the world</p>
          <div className="header-decoration">
            <div className="decoration-circle"></div>
            <div className="decoration-circle"></div>
            <div className="decoration-circle"></div>
          </div>
        </div>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="admin-upload-form">
          <div className="form-card">
            <div className="form-group-enhanced">
              <label htmlFor="title" className="form-label-enhanced">
                <span className="label-icon">📝</span>
                Blog Title
                <span className="required-star">*</span>
              </label>
              <div className="input-container">
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-input-enhanced"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  placeholder="Craft an engaging title for your blog..."
                />
                <div className="input-focus-border"></div>
              </div>
            </div>
          </div>
          <div className="form-card">
          <div className="form-group-enhanced">
            <label className="form-label-enhanced">
              Heading <span className="required-star">*</span>
            </label>
            <input
              type="text"
              name="heading"
              value={formData.heading}
              onChange={handleInputChange}
              className="form-input-enhanced"
              placeholder="Blog main heading"
              required
            />
          </div>
        </div>
           <div className="form-card">
              <div className="form-group-enhanced">
                <label className="form-label-enhanced">
                  Title Tag (SEO) <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  name="title_tag"
                  value={formData.title_tag}
                  onChange={handleInputChange}
                  className="form-input-enhanced"
                  placeholder="SEO title tag"
                  required
                />
              </div>
            </div>
            <div className="form-card">
              <div className="form-group-enhanced">
                <label className="form-label-enhanced">
                  Meta Description <span className="required-star">*</span>
                </label>
                <textarea
                  name="meta_description"
                  value={formData.meta_description}
                  onChange={handleInputChange}
                  className="form-input-enhanced"
                  placeholder="SEO meta description"
                  rows={3}
                  required
                />
              </div>
            </div>
            <div className="form-card">
              <div className="form-group-enhanced">
                <label className="form-label-enhanced">
                  Keywords <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleInputChange}
                  className="form-input-enhanced"
                  placeholder="housekeeping, cleaning service, staff"
                  required
                />
              </div>
            </div>
            <div className="form-card">
              <div className="form-group-enhanced">
                <label className="form-label-enhanced">
                  URL Title <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  name="url_title"
                  value={formData.url_title}
                  onChange={handleInputChange}
                  className="form-input-enhanced"
                  placeholder="housekeeping-services"
                  required
                />
              </div>
            </div>

         
            {/* <div className="form-card">
              <div className="form-group-enhanced">
                <label htmlFor="author_name" className="form-label-enhanced">
                  <span className="label-icon">👤</span>
                 Category
                  <span className="required-star">*</span>
                </label>
                <div className="input-container">
                 <select
                      id="author_name"
                      name="author_name"
                      className="form-input-enhanced"
                      value={formData.author_name}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="Housekeeping">Housekeeping</option>
                      <option value="Baby Sitting">Baby Sitting</option>
                      <option value="Elderly Care">Elderly Care</option>
                      <option value="Patient Care">Patient Care</option>
                      <option value="Cook">Cook</option>
                      <option value="Driver">Driver</option>
                    </select>
                  <div className="input-focus-border"></div>
                </div>
              </div>
            </div> */}

            <div className="form-card">
              <div className="form-group-enhanced">
                <label className="form-label-enhanced">
                  <span className="label-icon">🖼️</span>
                  Blog Image
                  <span className="required-star">*</span>
                </label>
                <div
                  ref={dropAreaRef}
                  className={`image-upload-area ${isDragging ? 'drag-over' : ''} ${imagePreview ? 'has-image' : ''}`}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  {imagePreview ? (
                    <div className="image-preview-container">
                      <img src={imagePreview} alt="Preview" className="uploaded-image" />
                      <div className="image-overlay">
                        <span className="change-image-text">Click to change image</span>
                      </div>
                    </div>
                  ) : (
                    <div className="upload-placeholder">
                      <div className="upload-icon">📁</div>
                      <div className="upload-text">
                        <p className="upload-main-text">Drop your image here or click to browse</p>
                        <p className="upload-sub-text">Supports JPG, PNG, WEBP - Max 5MB</p>
                      </div>
                    </div>
                  )}
                  <input
                    type="file"
                    id="image"
                    name="image"
                    className="hidden-file-input"
                    accept="image/*"
                    onChange={handleImageChange}
                    required={!formData.image}
                    ref={fileInputRef}
                  />
                </div>
              </div>
            </div>
        

          <div className="form-card">
            <div className="form-group-enhanced">
              <label htmlFor="content" className="form-label-enhanced">
                <span className="label-icon">📄</span>
                Blog Content
                <span className="required-star">*</span>
              </label>
              <div className="editor-container">
                <BlogEditor
                  id="content"
                  name="content"
                  className="blog-editor-enhanced"
                  value={formData.content}
                  onChange={handleEditorChange}
                  placeholder="Write your amazing blog content here..."
                />
              </div>
            </div>
          </div>

          <div className="form-actions-enhanced">
            <button
              type="button"
              onClick={handleReset}
              className="btn-secondary-enhanced"
              disabled={loading}
            >
              <span className="btn-icon">🔄</span>
              Reset Form
            </button>
            <button
              type="submit"
              className="btn-primary-enhanced"
              disabled={loading}
            >
              <span className="btn-icon">
                {loading ? '⏳' : '🚀'}
              </span>
              {loading ? 'Publishing...' : 'Publish Blog'}
            </button>
          </div>
        </form>

        {responseMessage && (
          <div className={`response-message ${isError ? 'error' : 'success'}`}>
            <div className="message-content">
              <span className="message-icon">
                {isError ? '❌' : '✅'}
              </span>
              {responseMessage}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogForm;