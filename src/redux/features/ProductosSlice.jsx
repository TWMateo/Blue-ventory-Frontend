import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productos:[],
    totalProductos:1
}

export const ProductosSlice = createSlice({
    name:'ProductosSlice',
    initialState:initialState,
    reducers:{
        setProductos:(state, datos)=>{
            state.productos= datos.payload.productos
        },
        setCantidadProductos:(state, datos) => {
            state.totalProductos = datos.payload.totalProductos
        }
    }
})

export const {setProductos, setCantidadProductos} = ProductosSlice.actions
export default ProductosSlice.reducer