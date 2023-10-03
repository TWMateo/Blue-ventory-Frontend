import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice  from "../features/SideBarSlice";

export const store = configureStore({
  reducer: {
    sideBar: SideBarSlice,
  },
});
