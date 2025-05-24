import { configureStore } from "@reduxjs/toolkit";
import ThemeSwitcherReducer from "./slices/ThemeSwitcher";

let store = configureStore({
  reducer: {
    theme: ThemeSwitcherReducer,
  },
});

export { store };
