import type { ITask } from "@/tyoes";
import { createSlice } from "@reduxjs/toolkit";
interface IInitialState {
  task: ITask[];
}
const initialState: IInitialState = {
  task: [
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
      priority: "High",
    },
  ],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
