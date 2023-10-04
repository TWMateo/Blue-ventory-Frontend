import reactImg from "../assets/react.svg";

const Cards = (props) => {
  return (
    <>
      <div className="border-solid w-[60%] h-[70%] lg:w-[20%] lg:h-[50%]  border-2 border-black bg-white lg:max-w-full flex flex-col items-center gap-3 rounded-2xl">
        <h1 className="w-[90%] mt-2 font-bold flex justify-center h-[8%]">Adidas Hoops 8K</h1>
        <h2 className="w-[90%] flex justify-center text-sm h-[8%]">Zapatos Deportivos</h2>
        <img className="w-[20%] h-[25%]" src="../react.svg"></img>
        <div className="w-[90%] h-[40%] text-xs whitespace-pre-line flex justify-center items-center">
        Zapatos originales de la marca Adidas Zapatos originales de la marca Adidas Zapatos originales de la marca Adidas Zapatos originales de la marca Adidas Zapatos originales de la marca Adidas Zapatos orig
        </div>
        <h3 className="w-[90%] mb-3 h-[15%] text-xs"><h3 className="font-bold">Precio:</h3>1000$</h3>
      </div>
    </>
  );
};

export default Cards;
