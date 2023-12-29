import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pagina:1,
}

export const PaginadorProductosSlice = createSlice({
    name:"paginadorProductos",
    initialState,
    reducers:{
        siguiente:(state)=>{
            state.pagina = state.pagina+1;
        },
        anterior:(state)=>{
            if(state.pagina>1){
                state.pagina=state.pagina-1;
            }
        }
    }
})

export const {siguiente, anterior}=PaginadorProductosSlice.actions;
export default PaginadorProductosSlice.reducer;