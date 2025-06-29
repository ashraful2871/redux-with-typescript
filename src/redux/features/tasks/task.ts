import type { RootState } from "@/redux/store";
import type { ITask } from "@/tyoes";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
interface IInitialState {
  tasks: ITask[];
  filter: "All" | "Low" | "Medium" | "High";
}

type DraftTask = Pick<
  ITask,
  "title" | "description" | "deuDate" | "priority" | "AssignTO"
>;
const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isCompleted: false,
    ...taskData,
    AssignTO: taskData.AssignTO ? taskData.AssignTO : null,
  };
};
const initialState: IInitialState = {
  tasks: [
    {
      id: "Bpj63yfMTfZXHKlhDMGQ6",
      isCompleted: false,
      title: "Nulla qui nostrum un",
      description: "Corporis cillum omni",
      AssignTO: null,
      priority: "Low",
      deuDate: "2025-06-25T18:00:00.000Z",
    },
  ],
  filter: "All",
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      console.log(action);

      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTsak: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"All" | "Low" | "Medium" | "High">
    ) => {
      state.filter = action.payload;
    },
  },
  // extraReducers:(builder) => {
  //   builder.addCase()
  // }
});
export const selectTask = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "Low") {
    return state.todo.tasks.filter((task) => task.priority === "Low");
  } else if (filter === "Medium") {
    return state.todo.tasks.filter((task) => task.priority === "Medium");
  } else if (filter === "High") {
    return state.todo.tasks.filter((task) => task.priority === "High");
  } else {
    return state.todo.tasks;
  }
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleCompleteState, deleteTsak, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
