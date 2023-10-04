import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import SobreNosotros from "./pages/SobreNosotros";
import Productos, {loader as ProductosLoader} from "./pages/Productos";
import Ventas from "./pages/Ventas";
import Compras from "./pages/Compras";
import Categorias from "./pages/Categorias";
import ErrorConsultaApi from "./pages/ErrorConsultaApi";
import ErrorPersonalizado from "./pages/ErrorPersonalizado";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/productos/:page/:limit",
        element: <Productos />,
        loader:ProductosLoader
      },
      {
        path: "/sobre-nosotros",
        element: <SobreNosotros />,
      },
      {
        path: "/Ventas",
        element: <Ventas />,
      },
      {
        path: "/Compras",
        element: <Compras />,
      },
      {
        path: "/Categorias",
        element: <Categorias />,
      },
      {
        path: "/ErrorApis",
        element: <ErrorConsultaApi />,
      },
      {
        path:"*",
        element:<ErrorPersonalizado/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
