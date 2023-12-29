import zapatos from "../assets/img/zapatillas.jpg"
import PropTypes from 'prop-types'

const Cards = ({descripcion, marca, precio}) => {
  return (
    <>
      <div className="animate-fade animate-delay-300 border-solid w-[100%] h-[100%] border-2 border-black bg-white flex flex-col items-center mb-2 rounded-2xl">
        <h1 className="w-[90%] mt-2 font-bold flex justify-center">
          {descripcion}
        </h1>
        <h2 className="w-[90%] flex justify-center text-sm h-[8%]">
          {marca}
        </h2>
        <img className="w-[40%]" src={`${zapatos}`}/>
        <div className="w-[90%] h-[40%] text-xs whitespace-pre-line flex justify-center items-center">
          {descripcion}
        </div>
        <h3 className="w-[90%] mb-3 h-[15%] text-xs">
          <h3 className="font-bold">Precio:</h3>
          {precio}
        </h3>
      </div>
    </>
  );
};


Cards.propTypes = {
   descripcion: PropTypes.string,
   marca:PropTypes.string,
   precio:PropTypes.string
 }

export default Cards;
