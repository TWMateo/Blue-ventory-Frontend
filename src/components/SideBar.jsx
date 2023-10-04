import { useSelector, useDispatch } from "react-redux";
import { abrirCerrar, cerrar } from "../redux/features/SideBarSlice";
import BVentoryIcon from "../assets/img/BVentory-V2_1.png";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  const sideBar = useSelector((state) => state.sideBar);
  const dispatch = useDispatch();
  let opciones = [
    {
      name: "Productos",
      icon: "fa-solid fa-shirt",
      funct: "Administrador",
      href: "/Productos/1/4",
    },
    {
      name: "Ventas",
      icon: "fa-solid fa-cart-shopping",
      funct: "Administrador",
      href: "/Ventas",
    },
    {
      name: "Compras",
      icon: "fa-solid fa-list",
      funct: "Administrador",
      href: "/Compras",
    },
    {
      name: "Categorías",
      icon: "fa-solid fa-sitemap",
      funct: "Administrador",
      href: "/Categorias",
    },
  ];

  return (
    <>
      <aside
        className={`flex flex-col items-center bg-blue-600 border border-black h-screen`}
      >
        <Link className="flex flex-col items-center" to={"/"}>
          <img className="mt-0 w-[100%]" src={BVentoryIcon} />
        </Link>
        <ul
          className={`flex flex-col w-[100%] justify-center items-center animate-fade`}
        >
          {opciones.length > 0 ? (
            opciones.map((el, index) => (
              <li
                className={`text-lg flex flex-col align-middle justify-center w-[80%] sm:w-[90%] mt-5 hover:bg-blue-500 rounded-md`}
                key={index}
              >
                <Link className={`flex justify-center items-center"`} to={`${el.href}`}>
                  <i className={`${el.icon} m-5 ${props.valor && "lg:w-[20%]"}`} />
                  <h3
                    className={`m-5 ml-2 items-center animate-fade animate-delay-300 ${!props.valor ? "w-0 hidden" : "w-0 hidden lg:flex lg:w-[80%]"}`}
                  >
                    {el.name}
                  </h3>
                </Link>
              </li>
            ))
          ) : (
            <h3>No hay opciones</h3>
          )}
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
