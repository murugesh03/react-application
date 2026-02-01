import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    userDtls: {}
  },
  reducers: {
    setUserDtls: (state, action) => {
      console.log(action);
      state.userDtls = action.payload;
    }
  }
});

export const { setUserDtls } = userSlice.actions;
export default userSlice.reducer;
