import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      console.log("hii" + action.payload);
      state.splice(action.payload, 1);
    },
    clearAllUsers(state, action) {
      console.log("hii del");
      return [];
    },
  },
});
// console.log(userSlice.actions.addUser());

export default userSlice.reducer;
export const { addUser, removeUser, clearAllUsers } = userSlice.actions;
