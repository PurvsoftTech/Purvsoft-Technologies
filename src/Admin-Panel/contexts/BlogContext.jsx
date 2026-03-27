import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";
import API_URL from "../../config/config";
const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const { token, isAuthenticated, logout } = useAuth();
  const [fetchblogs, setFetchBlogs] = useState([]);
  const API_BASE = `${API_URL}`;

  const getBlogs = async () => {
    if (!isAuthenticated || !token) {
      console.log("No token, skipping blog fetch");
      return;
    }
    try {
      console.log("Fetching blogs with token:", token.substring(0, 20) + "...");
      const res = await fetch(`${API_BASE}/blog/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const data = await res.json();
      // console.log("Fetch Blogs Response:", JSON.stringify(data, null, 2));

      if (res.ok) {
        setFetchBlogs(data.blogs?.data || data.blogs || []);
      } else {
        if (res.status === 401) {
          console.error("401 Unauthorized - Token:", token.substring(0, 20) + "...");
          toast.error("Session expired. Please log in again.");
          logout();
        } else {
          toast.error(data.message || "Failed to fetch blogs");
        }
      }
    } catch (err) {
      console.error("Fetch blogs error:", err);
      toast.error("Failed to fetch blogs");
    }
  };
    // =======================================================================================================// update Blog


  const updateBlog = async (blogId, formDataFromModal) => {
  if (!token) {
    toast.error("Login first bhai!");
    return;
  }
  try {
    const formData = new FormData();

    formData.append("_method", "PUT");  
    for (let [key, value] of formDataFromModal.entries()) {
      formData.append(key, value);
    }

    formData.append("id", blogId);

    console.log("Final FormData sending:");
    for (let [key, value] of formData.entries()) {
      console.log(key + ":", value instanceof File ? value.name : value);
    }

    const res = await fetch(`${API_BASE}/blog/update`, {  
      method: "POST",  
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const text = await res.text();
    console.log("Raw server response:", text); 

    let result;
    try {
      result = JSON.parse(text);
    } catch (e) {
      console.error("Non-JSON response:", text);
      toast.error("Server ne galat response bheja");
      return;
    }

    if (res.ok) {
      toast.success(result.message || "Blog update ho gaya!");
      await getBlogs?.(); 
    } else {
      console.log("Error status:", res.status, "Response:", result);

      if (res.status === 422) {
        const errors = result.errors
          ? Object.values(result.errors).flat().join(" • ")
          : result.message || "Validation fail";
        toast.error(`Update fail: ${errors}`);
      } else if (res.status === 401) {
        toast.error("Session khatam – login kar");
        logout?.();
      } else {
        toast.error(result.message || `Error ${res.status}`);
      }
    }
  } catch (err) {
    console.error("Network ya fetch error:", err);
    toast.error("Connection issue: " + err.message);
  }
};

// =======================================================================================================// delete  Blog


  const deleteBlog = async (blogId) => {
  if (!isAuthenticated || !token) {
    toast.error("Please log in to delete blogs.");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/blog/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",   
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id: blogId }),   
    });

    const result = await res.json();
    console.log("Delete Blog Response:", result);

    // ✅ SUCCESS
    if (res.ok && (result.success || result.status)) {
      toast.success(result.message || "Blog deleted successfully!");
      setFetchBlogs((prev) =>
        prev.filter((blog) => blog.id !== blogId)
      );
      return;
    }
    if (
      res.status === 401 &&
      result.message?.toLowerCase().includes("permission")
    ) {
      toast.error(result.message);
      return;
    }

    if (
      res.status === 401 &&
      (
        result.message?.toLowerCase().includes("unauthenticated") ||
        result.message?.toLowerCase().includes("token")
      )
    ) {
      toast.error("Session expired. Please login again.");
      logout();
      return;
    }

    toast.error(result.message || "Failed to delete blog");

  } catch (err) {
    console.error("Delete error:", err);
    toast.error("Failed to delete blog");
  }
};


  useEffect(() => {
    if (isAuthenticated && token) {
      console.log("Fetching blogs with token:", token.substring(0, 20) + "...");
      getBlogs();
    } else {
      setFetchBlogs([]);
      // console.log("No token, blogs cleared");
    }
  }, [token, isAuthenticated]);

  return (
    <BlogContext.Provider
      value={{
        fetchblogs,
        getBlogs,
        updateBlog,
        deleteBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);