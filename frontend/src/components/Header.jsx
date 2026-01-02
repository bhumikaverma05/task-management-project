import { Bell, Search, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    setOpen(false);
    logout();
    navigate("/login");
  };

  const goToProfile = () => {
    setOpen(false);
    navigate("/profile");
  };

  return (
    <header className="app-header">
      {/* LEFT: App Greeting */}
      <div className="header-left">
        <h1 className="header-title">Welcome 👋</h1>
        <p className="header-subtitle">
          Here’s what’s happening today
        </p>
      </div>

      {/* RIGHT: Actions */}
      <div className="header-actions">
        {/* Search */}
        <div className="header-search">
          <Search size={16} />
          <input
            className="header-search-input"
            placeholder="Search tasks..."
            aria-label="Search tasks"
          />
        </div>

        {/* Notifications */}
        <button className="header-icon-btn" aria-label="Notifications">
          <Bell size={18} />
        </button>

        {/* Profile */}
        <div className="header-profile">
          <button
            className="profile-chip"
            onClick={() => setOpen(prev => !prev)}
          >
            <User size={16} />
            <span>Profile</span>
          </button>

          {open && (
            <div className="profile-menu">
              <button onClick={goToProfile}>My Profile</button>
              <button className="danger" onClick={handleLogout}>
                <LogOut size={14} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
