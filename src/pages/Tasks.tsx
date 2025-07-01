import { AddTaskModal } from "@/components/modulle/AddTaskModal";
import TaskCard from "@/components/task-card/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/bseApi";
import { selectTask, updateFilter } from "@/redux/features/tasks/task";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import type { ITask } from "@/tyoes";

const Tasks = () => {
  const task = useAppSelector(selectTask);
  const { data, isLoading, isError } = useGetTasksQuery(undefined, {
    // pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const dispatch = useAppDispatch();
  console.log({ data, isLoading, isError });
  if (isLoading) {
    return <p>Loading....</p>;
  }
  //  const filter = useAppSelector(selectFilter);
  console.log(task);
  // console.log(filter);
  return (
    <div>
      <div className="flex justify-end items-center mb-3 gap-5">
        <h1 className="mr-auto"> Add Task</h1>
        <Tabs defaultValue="All">
          <TabsList>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("All"))}
              value="All"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Low"))}
              value="Low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Medium"))}
              value="Medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("High"))}
              value="High"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal></AddTaskModal>
      </div>
      <div>
        {!isLoading &&
          data.tasks.map((task: ITask) => (
            <TaskCard key={task.id} task={task}></TaskCard>
          ))}
      </div>
    </div>
  );
};

export default Tasks;
