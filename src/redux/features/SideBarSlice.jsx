import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: true,
};

export const SideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    abrirCerrar: (state) => {
      state.open = !state.open;
    },
    abrir: (state) => {
      state.open = true;
    },
    cerrar:(state)=>{
      state.open=false;
    }
  },
});

export const { abrirCerrar, abrir, cerrar } = SideBarSlice.actions;
export default SideBarSlice.reducer;
