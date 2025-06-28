import type { RootState } from "@/redux/store";
import type { ITask } from "@/tyoes";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
interface IInitialState {
  tasks: ITask[];
  filter: "all" | "high";
}

type DraftTask = Pick<ITask, "title" | "description" | "devDate" | "priority">;
const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};
const initialState: IInitialState = {
  tasks: [],
  filter: "all",
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
  },
});
export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleCompleteState, deleteTsak } = taskSlice.actions;

export default taskSlice.reducer;
