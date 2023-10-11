import reactImg from "../assets/react.svg";
import zapatos from "../assets/img/zapatillas.jpg"

const Cards = () => {
  return (
    <>
      <div className="border-solid w-[100%] h-[100%] border-2 border-black bg-white flex flex-col items-center mb-2 rounded-2xl">
        <h1 className="w-[90%] mt-2 font-bold flex justify-center">
          Adidas Hoops 8K
        </h1>
        <h2 className="w-[90%] flex justify-center text-sm h-[8%]">
          Zapatos Deportivos
        </h2>
        <img className="w-[40%]" src={`${zapatos}`}/>
        <div className="w-[90%] h-[40%] text-xs whitespace-pre-line flex justify-center items-center">
          Zapatos originales adidas color blanco y rojo
        </div>
        <h3 className="w-[90%] mb-3 h-[15%] text-xs">
          <h3 className="font-bold">Precio:</h3>1000$
        </h3>
      </div>
    </>
  );
};

export default Cards;
