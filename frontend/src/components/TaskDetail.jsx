import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // temporary state (replace later with API)
  const task = {
    id,
    title: "Design Dashboard UI",
    description:
      "Create a clean, modern dashboard UI with proper spacing, colors, and layout consistency.",
    status: "In Progress",
    priority: "High",
    dueDate: "Jan 20, 2026",
    assignedTo: "Team Design",
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <Header />

        <div className="dashboard-content">
          <button
            className="back-button"
            onClick={() => navigate("/tasks")}
          >
            ← Back to Tasks
          </button>

          <div className="task-detail-card">
            <h1 className="task-detail-title">{task.title}</h1>

            <p className="task-detail-description">
              {task.description}
            </p>

            <div className="task-detail-meta">
              <div>
                <span className="meta-label">Status</span>
                <span className="meta-value">{task.status}</span>
              </div>

              <div>
                <span className="meta-label">Priority</span>
                <span className="meta-value">{task.priority}</span>
              </div>

              <div>
                <span className="meta-label">Due Date</span>
                <span className="meta-value">{task.dueDate}</span>
              </div>

              <div>
                <span className="meta-label">Assigned To</span>
                <span className="meta-value">{task.assignedTo}</span>
              </div>
            </div>

            <div className="task-comments">
              <h3>Comments</h3>
              <p className="empty-text">
                No comments yet. Start the discussion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
