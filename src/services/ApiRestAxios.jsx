import axios from "axios";
import { redirect } from "react-router-dom";

export async function getProductos(pagina, limite) {
  let datos = await axios
    .get(
      `${
        import.meta.env.VITE_BLUE_VENTORY_API_URL
      }producto?page=${pagina}&limit=${limite}`
    )
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      } else {
        console.log("Fallo la comunicación con el API");
      }
    })
    .catch((error) => {
      console.log(error);
      return redirect("/ErrorApis");
    });
  return datos;
}

export async function getProductoByDescripcion(descripcion,limite,pagina) {
  //Parametros solicitud: pagina, limite, descripcion, marca, categoria
  console.log("busqueda desc");
  let productoBuscado = {
    descripcion: descripcion,
    marca: "Adidas",
    categoria: "Calzado deportivo",
    limit: limite,
    page: pagina,
  };
  if (!descripcion) {
    return getProductos(1, 4);
  } else {
    let datos = await axios
      .post(
        `${import.meta.env.VITE_BLUE_VENTORY_API_URL}productos-por-descripcion`,
        productoBuscado
      )
      .then((response) => {
        if (response.status == 200) {
          return response.data;
        } else {
          console.log("Fallo la comunicación con el API");
        }
      })
      .catch((e) => {
        console.log(e);
        return redirect("/ErrorApis");
      });
    return datos;
  }
}
