import { getProductos } from "../services/ApiRestAxios";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

export async function loader({ params }) {
  let datos = await getProductos(params.page, params.limit);
  console.log(datos);
  return datos;
}

const Productos = () => {
  let datos = useLoaderData();
  return (
    <>
      <div className="bg-slate-800 h-[90%] flex flex-col items-center">
        <div className="w-[90%]">
          <h1 className="text-2xl mt-2 mb-2">Productos</h1>
        </div>
        <Card />
      </div>
    </>
  );
};

export default Productos;
