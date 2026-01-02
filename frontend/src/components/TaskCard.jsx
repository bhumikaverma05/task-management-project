import { useAuth } from "../context/AuthContext";

const TaskCard = ({ task }) => {
  const { user } = useAuth();
  const role = user?.role || "member";

  const isDone = task.status === "completed";

  return (
    <div className="task-card">
      <div>
        <p className="task-title">{task.title}</p>
        <p className="task-description">{task.description}</p>
      </div>

      {/* STATUS */}
      <div className="task-status">
        <span
          className={`status-badge ${
            isDone ? "status-done" : "status-pending"
          }`}
        >
          {isDone ? "Done" : "Pending"}
        </span>
      </div>

      {/* MEMBER NOTE (READ ONLY) */}
      {role === "member" && task.note && (
        <div className="task-note">
          <strong>Message:</strong> {task.note}
        </div>
      )}
    </div>
  );
};

export default TaskCard;
