import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />

        <div className="dashboard-content">
          <h1 className="page-title">Settings</h1>

          <div className="task-detail-card">
            <h3>Appearance</h3>

            <div className="setting-row">
              <span>Dark Mode</span>

              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <p className="empty-text">
              Toggle dark mode for better viewing comfort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
