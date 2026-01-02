import Sidebar from "./Sidebar";
import Header from "./Header";

const Reports = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-content">
          <h1 className="page-title">Reports</h1>
          <div className="empty-state">
            <h3>No reports available</h3>
            <p>Task analytics and progress reports will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
