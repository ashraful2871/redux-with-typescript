import { AddTaskModal } from "@/components/modulle/AddTaskModal";
import TaskCard from "@/components/task-card/TaskCard";
import { selectFilter, selectTask } from "@/redux/features/tasks/task";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const task = useAppSelector(selectTask);
  const filter = useAppSelector(selectFilter);
  console.log(task);
  console.log(filter);
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h1> Add Task</h1>
        <AddTaskModal></AddTaskModal>
      </div>
      <div>
        {task.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
