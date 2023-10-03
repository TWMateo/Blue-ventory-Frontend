import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { homeSideBar } = useOutletContext();

  return (
    <>
      <body
        className={`flex flex-col justify-center items-center h-[90%] bg-gray-700`}
      >
        <div className="bg-gray-600">
          <h3 className="animate-fade-up animate-delay-300">
            Bienvenido a la aplicación de administración Mateo Chancosi!
          </h3>
        </div>
      </body>
    </>
  );
};

export default Home;
