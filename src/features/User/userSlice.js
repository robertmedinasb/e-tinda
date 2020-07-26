import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    dni: "",
  },
  empty: true,
};

const userSlice = createSlice({
  name: "current_user",
  initialState,
  reducers: {
    userLogged(state, action) {
      const { values } = action.payload;
      state.user.email = values.email;
      state.user.password = values.password;
      state.user.dni = values.dni;
      state.empty = !state.empty;
      console.log(state.user);
    },
    userLoggedOut(state, action) {
      state.user = {
        email: "",
        dni: "",
      };
      state.empty = action.payload;
    },
  },
});
export const { userLogged, userLoggedOut } = userSlice.actions;
export default userSlice.reducer;
