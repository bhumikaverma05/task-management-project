import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Tasks from "./components/Tasks";
import TaskDetail from "./components/TaskDetail";
import Teams from "./components/Teams";
import Reports from "./components/Reports";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";

import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";

import "./App.css";
import "./components/styles.css";

const HomeRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated
    ? <Navigate to="/dashboard" replace />
    : <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomeRoute />} />

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/tasks" element={<ProtectedRoute><Tasks /></ProtectedRoute>} />
        <Route path="/tasks/:id" element={<ProtectedRoute><TaskDetail /></ProtectedRoute>} />
        <Route path="/teams" element={<ProtectedRoute><Teams /></ProtectedRoute>} />
        <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
