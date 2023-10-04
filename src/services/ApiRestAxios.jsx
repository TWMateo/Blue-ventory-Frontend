import axios from "axios"
import { redirect } from "react-router-dom"

export async function getProductos(pagina, limite){
    console.log('ENTRANDO')
    let datos = await axios.get(`${import.meta.env.VITE_BLUE_VENTORY_API_URL}producto?page=${pagina}&limit=${limite}`)
    .then((response)=>{
        if(response.status == 200){
            return response.data;
        }else{
            console.log("Fallo la comunicación con el API");
        }
    }).catch((error)=>{
        return redirect("/ErrorApis");
    });
    return datos;
}