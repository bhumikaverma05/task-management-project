import TaskCard from "./TaskCard";

const KanbanColumn = ({ title, status, tasks, moveTask }) => {
  const nextStatus =
    status === "todo"
      ? "inProgress"
      : status === "inProgress"
      ? "completed"
      : null;

  return (
    <div className="kanban-column">
      <div className="column-header">
        <span className="column-title">{title}</span>
        <span className="task-count">{tasks.length}</span>
      </div>

      <div className="tasks-list">
        {tasks.length === 0 ? (
          <p>No tasks</p>
        ) : (
          tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onMove={
                nextStatus
                  ? () => moveTask(task.id, nextStatus)
                  : null
              }
            />
          ))
        )}
      </div>
    </div>
  );
};

export default KanbanColumn;
