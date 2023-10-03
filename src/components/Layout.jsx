import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

const Layout = () => {
  const accionSideBar = useSelector((state) => state.sideBar);

  return (
    <>
      <div className="flex h-screen">
        <div
          className={`${
            accionSideBar.open ? "w-[17%]" : "w-[15%] lg:w-[10%] "
          } duration-1000`}
        >
          <SideBar valor={accionSideBar.open} />
        </div>
        <main className={`container`}>
          <Header valor={accionSideBar.open} />
          <Outlet context={{ homeSideBar: accionSideBar.open }} />
        </main>
      </div>
    </>
  );
};

export default Layout;
