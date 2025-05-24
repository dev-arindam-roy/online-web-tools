import { createSlice } from "@reduxjs/toolkit";

const localStorageKeyName = "github_onex_online_tool_theme";

const storedTheme = localStorage.getItem(localStorageKeyName) || "dark";

const initialState = {
  mode: storedTheme,
};

const themeSwitcherSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem(localStorageKeyName, state.mode);
    },
  },
});

export const { toggleTheme } = themeSwitcherSlice.actions;
export default themeSwitcherSlice.reducer;
