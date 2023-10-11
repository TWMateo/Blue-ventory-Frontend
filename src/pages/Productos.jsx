import { getProductos } from "../services/ApiRestAxios";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import PaginatedItems from "../components/PaginatedItems";

export async function loader({ params }) {
  let datos = await getProductos(params.page, params.limit);
  console.log(datos);
  return datos;
}

const Productos = () => {
  let datos = useLoaderData();

  return (
    <>
      <div className="bg-slate-800 h-[90%] flex flex-col gap-2 items-center">
        <h1 className="w-[90%] text-white text-3xl hidden sm:flex">
          Productos
        </h1>
        <div className="flex items-center text-2xl border border-black mt-3 sm:pt-0 bg-white p-1 w-[85%] lg:w-[90%] rounded-lg">
          <i className="fa-solid fa-magnifying-glass w-[10%]"></i>
          <input
            className="p-0 m-0 w-[70%] text-xl lg:text-2xl"
            placeholder="Buscar..."
          />
        </div>
        {datos.response.length > 0 ? (
          <div className="w-[90%] grid grid-cols-2 place-items-center md:mt-5 lg:grid-cols-2 gap-1">
            {datos.response.map((dat) => (
              <div key={1} className="w-[80%]">
                <Card key={"l"} />
              </div>
            ))}
          </div>
        ) : (
          <div>No hay datos de productos por el momento.</div>
        )}
        <div className="w-[90%] flex justify-center items-center">
          <PaginatedItems />
        </div>
      </div>
    </>
  );
};

export default Productos;
