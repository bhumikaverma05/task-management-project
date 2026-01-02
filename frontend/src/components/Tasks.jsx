import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TaskCard from "./TaskCard";

const Tasks = () => {
  const navigate = useNavigate();

  // Initial realistic state (empty when no tasks assigned)
  const tasks = [];

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <Header />

        <div className="dashboard-content">
          <h1 className="page-title">Tasks</h1>

          {tasks.length === 0 ? (
            <div className="empty-state">
              <h3>No tasks available</h3>
              <p>
                Tasks assigned to you or your team will appear here.
              </p>
            </div>
          ) : (
            <div className="tasks-grid">
              {tasks.map(task => (
                <div
                  key={task.id}
                  onClick={() => navigate(`/tasks/${task.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <TaskCard task={task} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
