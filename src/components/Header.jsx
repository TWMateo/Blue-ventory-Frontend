import { useSelector, useDispatch } from "react-redux";
import { abrirCerrar } from "../redux/features/SideBarSlice";
import { Link } from "react-router-dom";

const Header = (props) => {
  const sideBar = useSelector((state) => state.sideBar);
  const dispatch = useDispatch();

  return (
    <>
      <header className={`bg-blue-600 border h-[10%] border-black flex items-center text-lg w-[100%]`}>
        <button className="flex rounded-md" onClick={()=>dispatch(abrirCerrar())}>
          <i className="fa-solid fa-bars ml-0 p-5 hover:bg-blue-500 rounded-md" />
        </button>
        <h1 className="text-white ml-5 animate-fade animate-delay-300 text-xl">Blue Ventory</h1>
      </header>
    </>
  );
};

export default Header;
