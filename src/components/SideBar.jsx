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
      href: "/Productos",
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
          className={`flex flex-col justify-center items-center animate-fade`}
        >
          {opciones.length > 0 ? (
            opciones.map((el, index) => (
              <li
                className={`text-lg w-[100%] mt-5 hover:bg-blue-500 rounded-md`}
                key={index}
              >
                <Link className={`flex`} to={`${el.href}`}>
                  <i className={`${el.icon} m-5`} />
                  <h3
                    className={`m-5 animate-fade animate-delay-300 ${!props.valor ? "hidden" : "hidden md:flex"}`}
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