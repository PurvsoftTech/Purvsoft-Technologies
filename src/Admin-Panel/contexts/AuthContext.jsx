import React, { createContext, useContext, useState, useEffect } from "react";
import API_URL from "../../config/config";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ LOGIN FIXED
 async function login(email, password) {
  try {
    const res = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const contentType = res.headers.get("content-type");

    let data;

    if (contentType && contentType.includes("application/json")) {
      data = await res.json();
    } else {
      const text = await res.text();
      console.error("❌ Login not JSON:", text);
      return { success: false, message: "Server error" };
    }

    // console.log("LOGIN RESPONSE:", data);

    // ✅ FIXED: Handle array response from server
    let tokenValue;
    if (Array.isArray(data) && data.length > 0) {
      tokenValue = data[0];
    } else {
      tokenValue = data.token || data.access_token;
    }

    // console.log("Token extracted:", tokenValue); // Debug log

    if (res.ok && tokenValue) {
      localStorage.setItem("apiToken", tokenValue);
      localStorage.setItem("authUser", JSON.stringify({ email }));

      setToken(tokenValue);
      setCurrentUser({ email });

      return { success: true };
    } else {
      return { success: false, message: data.message || "Login failed" };
    }

  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "Something went wrong" };
  }
}

  // ✅ LOGOUT
  function logout() {
    localStorage.removeItem("apiToken");
    localStorage.removeItem("authUser");
    setToken(null);
    setCurrentUser(null);
  }

  // ✅ AUTO LOGIN
  useEffect(() => {
    const storedToken = localStorage.getItem("apiToken");
    const user = localStorage.getItem("authUser");

    if (storedToken && user) {
      setToken(storedToken);
      setCurrentUser(JSON.parse(user));
    }

    setLoading(false);
  }, []);

  const value = {
    currentUser,
    token,
    isAuthenticated: !!token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}