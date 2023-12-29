import {
  getProductos,
  getProductoByDescripcion,
} from "../services/ApiRestAxios";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
//import PaginatedItems from "../components/PaginatedItems";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCantidadProductos,
  setProductos,
} from "../redux/features/ProductosSlice";
import { Pagination } from "keep-react";
import { BounceLoader } from "react-spinners";

export async function loader({ params }) {
  let datos = await getProductos(params.page, params.limit);
  return datos;
}

const Productos = () => {
  let datos = useLoaderData();
  const [busqueda, setBusqueda] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [buscando, setBuscando] = useState(false);
  const dispatch = useDispatch();
  let datosProductos = useSelector((state) => state.productos.productos);
  console.log(datosProductos);
  let totalPaginas = useSelector((state) => state.productos.totalProductos);

  useEffect(() => {
    dispatch(setProductos({ productos: datos.response }));
    let totalPaginas = Math.ceil(
      datos.totalProductos / import.meta.env.VITE_PRODUCTOS_POR_PAGINA
    );
    dispatch(setCantidadProductos({ totalProductos: totalPaginas }));
  }, [dispatch]);

  useEffect(() => {
    if (buscando) {
      handleBusqueda();
    } else {
      const fetchData = async () => {
        let fetchData = await getProductos(
          currentPage,
          import.meta.env.VITE_PRODUCTOS_POR_PAGINA
        );
        dispatch(setProductos({ productos: fetchData.response }));
        let totalPaginas = Math.ceil(
          fetchData.totalProductos / import.meta.env.VITE_PRODUCTOS_POR_PAGINA
        );
        dispatch(setCantidadProductos({ totalProductos: totalPaginas }));
      };
      fetchData();
    }
  }, [currentPage]);

  const handleBusqueda = async () => {
    if (busqueda) {
      let datosBuscados = await getProductoByDescripcion(
        busqueda,
        import.meta.env.VITE_PRODUCTOS_POR_PAGINA,
        buscando ? currentPage : 1
      );
      dispatch(setProductos({ productos: datosBuscados.response }));
      let totalPaginas = Math.ceil(
        datosBuscados.totalProductos / import.meta.env.VITE_PRODUCTOS_POR_PAGINA
      );
      console.log(datosBuscados);
      dispatch(setCantidadProductos({ totalProductos: totalPaginas }));
      setBuscando(true);
    }
  };

  return (
    <>
      <div className="h-[90%] flex flex-col gap-2 items-center">
        <div className="flex items-center text-2xl border border-black mt-3 sm:pt-0 bg-white p-1 w-[85%] lg:w-[82%] rounded-lg gap-10">
          <i className="fa-solid fa-magnifying-glass w-[10%]"></i>
          <input
            className="p-0 m-0 w-[70%] text-xl lg:text-2xl"
            placeholder="Buscar..."
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button
            onClick={handleBusqueda}
            className="hover:bg-blue-400 rounded-lg"
          >
            Buscar
          </button>
        </div>
        {datosProductos ? (
          <div className="w-[90%] grid grid-cols-2 place-items-center md:mt-5 lg:grid-cols-2 gap-1">
            {datosProductos.map((dat, key) => (
              <div key={key} className="w-[80%]">
                <Card
                  key={key}
                  descripcion={dat.descripcion}
                  marca={dat.marca}
                  precio={dat.precio}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-[90%] flex flex-col items-center justify-center h-[72%]">
            No hay datos de productos por el momento.
          </div>
        )}
        <div className="w-[90%] flex justify-center items-center">
          <Pagination
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            totalPages={totalPaginas}
            iconWithText={true}
            prevNextShape="circle"
            activeCurrentPageShape="circle"
          />
        </div>
      </div>
    </>
  );
};

export default Productos;
