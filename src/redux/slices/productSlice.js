import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "productInfo",
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

export const {} = productSlice.actions;
export default productSlice.reducer;
