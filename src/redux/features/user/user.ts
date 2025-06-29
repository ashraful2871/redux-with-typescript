import type { RootState } from "@/redux/store";
import type { IUser } from "@/tyoes";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}
const initialState: InitialState = {
  users: [
    {
      id: "fsuhvihjf",
      name: "Ash",
    },
    {
      id: "fsuhvih573jf",
      name: "pro",
    },
    {
      id: "fsuh477753vihjf",
      name: "Rock",
    },
  ],
};
type DraftUser = Pick<IUser, "name">;
const createUser = (userData: DraftUser): IUser => {
  return { id: nanoid(), ...userData };
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
  },
});
export const selectUser = (state: RootState) => state.user.users;
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
