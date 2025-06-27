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
      {task.map((task) => (
        <TaskCard task={task}></TaskCard>
      ))}
    </div>
  );
};

export default Tasks;
