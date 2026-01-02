import Sidebar from "./Sidebar";
import Header from "./Header";

const Teams = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-content">
          <h1 className="page-title">Teams</h1>
          <div className="empty-state">
            <h3>No teams yet</h3>
            <p>Teams created by admin will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
