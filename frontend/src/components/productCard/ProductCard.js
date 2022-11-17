import cart from './cart.svg'
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
//swipper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from 'react';

// const FakeApp = [{
//   name: 'Aspirina',
//   description: 'una nueva pastilla para tomar, cada ciertas horas',
//   isFavorite: false,
//   precio: 4.41
// },
// {
//   name: 'Al dia siguiente',
//   description: 'Famosa pastilla para mujeres que cogieron sin proteccion y no quieren hijos porque todas putas',
//   isFavorite: true,
//   precio: 4.41
// },
// {
//   name: 'Simvastatina',
//   description: 'una nueva pastilla para tomar, cada ciertas horas',

//   isFavorite: true,
//   precio: 4.41
// }, {
//   name: 'Amlodipina',
//   description: 'una nueva pastilla para tomar, cada ciertas horas',
//   isFavorite: true,
//   precio: 4.41
// }, {
//   name: 'Paracetamol',
//   description: 'una nueva pastilla para tomar, cada ciertas horas',
//   isFavorite: true,
//   precio: 4.41
// },
// {
//   name: 'KevinFake',
//   description: 'una nueva pastilla para tomar, cada ciertas horas',
//   isFavorite: true,
//   precio: 4.41
// },
// {
//   name: 'Ultra',
//   description: 'una nueva pastilla para tomar, cada ciertas horas',
//   isFavorite: true,
//   precio: 4.41,
// },
// {
//   name: 'Lexotiroxina sódica',
//   description: 'una nueva pastilla para tomar, cada ciertas horas',
//   isFavorite: true,
//   precio: 4.41
// },
// ]

function Card(props) {

  const [favorito, setFavorito] = useState(false)

  const handleFavourite = () => {
    console.log(product);
    product.isFavorite = !product.isFavorite
    setFavorito(!favorito)
  }

  const { product } = props
  return (




    <div key={product.id} className=" max-w-[290px] max-h-[30rem] flex flex-col bg-white border-gray-200
       p-4 border-2 rounded-2xl shadow-slate-200 shadow-md">
      {favorito
        ? <FcLike onClick={handleFavourite} className='w-8 h-8 flex self-end' />
        : <AiOutlineHeart onClick={handleFavourite} className='w-8 h-8 flex self-end' />}
      <img className=" w-52 h-52 mt-2 self-center" src={product.image} alt="" srcset="" />
      <h2 className="flex self-center mt-3 text-2xl font-medium" >{product.name}aaaaaa</h2>
      {/* <p className="flex mt-4 ml-2 text-gr" >{product.description}</p> */}

      <div className="flex row-auto mt-2 gap-2">
        {[...new Array(5)].map((item, index) => (
          <AiOutlineStar key={index} className='w-5 h-5 ' />
        ))}
      </div>

      <div className="flex row-auto mt-2 space-x-14">
        <div className="">
          <p className="mt-2 ml-3">$ {product.precio}</p>
          <p className="ml-3 text-gray-500 line-through">$5,550</p>
        </div>

        <div className="h-11 flex border-2 mt-2 border-red-400 rounded-lg">
          <button className=" w-28 bg-red-400  text-white font-semibold rounded-md hover:bg-red-600">Buy</button>
          <img className="w-9 h-9 ml-2 mr-2" src={cart} alt="pasti" srcset="" />
        </div>
      </div>
    </div>


  );
}

export default Card;
