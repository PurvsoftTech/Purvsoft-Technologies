// Updated AuthContext - Consistent token key "apiToken", token in state
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

    const data = await res.json();
    console.log("LOGIN RESPONSE:", data);

    // ✅ SIMPLE TOKEN EXTRACTION
    let tokenValue = Array.isArray(data) ? data[0] : data;

    if (res.ok && tokenValue) {
      localStorage.setItem("apiToken", tokenValue);
      localStorage.setItem("authUser", JSON.stringify({ email }));

      setToken(tokenValue);
      setCurrentUser({ email });

      return { success: true };
    } else {
      return { success: false, message: "Login failed" };
    }
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "Something went wrong" };
  }
}

  function logout() {
    localStorage.removeItem("apiToken");
    localStorage.removeItem("authUser");
    setToken(null);
    setCurrentUser(null);
    console.log("Logged out - token cleared");
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("apiToken");
    const user = localStorage.getItem("authUser");
    console.log("Auth check - stored token:", storedToken ? "Found" : "Not found");

    if (storedToken && user) {
      setToken(storedToken);
      setCurrentUser(JSON.parse(user));
    } else {
      setToken(null);
      setCurrentUser(null);
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