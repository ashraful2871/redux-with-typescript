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
  },
});
export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
