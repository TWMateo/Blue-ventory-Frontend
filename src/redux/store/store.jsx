import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice  from "../features/SideBarSlice";
import PaginadorProductosSlice from "../features/PaginadorProductosSlice";
import ProductosSlice from "../features/ProductosSlice";

export const store = configureStore({
  reducer: {
    sideBar: SideBarSlice,
    paginadorProductos: PaginadorProductosSlice,
    productos:ProductosSlice
  },
});
