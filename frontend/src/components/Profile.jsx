import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useAuth } from "../context/AuthContext";
import { User } from "lucide-react";

const Profile = () => {
  const { user } = useAuth();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || ""
      });
    }
  }, [user]);

  const handleSave = () => {
    const stored = JSON.parse(localStorage.getItem("auth"));
    localStorage.setItem(
      "auth",
      JSON.stringify({
        ...stored,
        user: { ...stored.user, ...form }
      })
    );
    setEditing(false);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <Header />

        <div className="dashboard-content">
          <h1 className="page-title">Profile</h1>

          <div className="profile-card">
            {/* LEFT */}
            <div className="profile-left">
              <div className="profile-avatar">
                <User size={36} />
              </div>

              <h2 className="profile-name">{form.name}</h2>
              <p className="profile-email">{form.email}</p>

              <span className="role-badge">
                {user?.role?.toUpperCase()}
              </span>
            </div>

            {/* RIGHT */}
            <div className="profile-right">
              <h3>Account Details</h3>

              <div className="profile-field">
                <label>Name</label>
                {editing ? (
                  <input
                    value={form.name}
                    onChange={e =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                ) : (
                  <p>{form.name}</p>
                )}
              </div>

              <div className="profile-field">
                <label>Email</label>
                {editing ? (
                  <input
                    value={form.email}
                    onChange={e =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                ) : (
                  <p>{form.email}</p>
                )}
              </div>

              <div className="profile-actions">
                {editing ? (
                  <>
                    <button className="add-button" onClick={handleSave}>
                      Save Changes
                    </button>
                    <button
                      className="cancel-button"
                      onClick={() => setEditing(false)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    className="add-button"
                    onClick={() => setEditing(true)}
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
