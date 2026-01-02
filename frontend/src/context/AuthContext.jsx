import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: null,
  token: null,
  isAuthenticated: false,
  login: async () => {},
  signup: async () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load auth from storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("auth");
      if (stored) {
        const parsed = JSON.parse(stored);
        setUser(parsed.user || null);
        setToken(parsed.token || null);
      }
    } catch (e) {
      console.error("Auth parse error", e);
    } finally {
      setLoading(false);
    }
  }, []);

  // Persist auth
  useEffect(() => {
    if (token) {
      localStorage.setItem(
        "auth",
        JSON.stringify({ user, token })
      );
    } else {
      localStorage.removeItem("auth");
    }
  }, [user, token]);

  const login = async ({ email, password }) => {
    if (!email || !password) {
      throw new Error("Missing credentials");
    }

    // mock login
    const mockToken = "mock-token";
    const mockUser = {
      name: email.split("@")[0],
      email
    };

    setUser(mockUser);
    setToken(mockToken);

    return { user: mockUser, token: mockToken };
  };

  const signup = async ({ name, email, password }) => {
    if (!name || !email || !password) {
      throw new Error("Missing fields");
    }

    const mockToken = "mock-token";
    const mockUser = { name, email };

    setUser(mockUser);
    setToken(mockToken);

    return { user: mockUser, token: mockToken };
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("auth");
  };

  const value = {
    user,
    token,
    isAuthenticated: !!token,
    login,
    signup,
    logout
  };

  // prevent route flicker
  if (loading) return null;

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
};

export default AuthProvider;
