import type { RootState } from "@/redux/store";
import type { ITask } from "@/tyoes";
import { createSlice } from "@reduxjs/toolkit";
interface IInitialState {
  tasks: ITask[];
  filter: "all" | "high";
}
const initialState: IInitialState = {
  tasks: [
    {
      id: "5485v515f7t8h77t9ba",
      title: "Frontend Initial",
      description: "create home page and routing",
      devDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "5485v515f71th77t9ba",
      title: "Create repo",
      description: "create home page and routing",
      devDate: "2025-11",
      isCompleted: false,
      priority: "Low",
    },
  ],
  filter: "all",
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});
export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
