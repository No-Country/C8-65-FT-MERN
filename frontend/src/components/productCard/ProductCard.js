import cart from './cart.svg'
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
//swipper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../Store';
import axios from 'axios';
import { IconContext } from 'react-icons/lib';


function Card(props) {

  const [favorito, setFavorito] = useState(false)

  const handleFavourite = () => {
    console.log(product);
    product.isFavorite = !product.isFavorite
    setFavorito(!favorito)
  }

  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.stock < quantity) {
      window.alert('Producto sin stock');
      return;
    }
    // se usa ese nombre para no confundir con "dispatch"
    ctxDispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity } })

  };
  return (


    <IconContext.Provider value={{ color: '#9E9E9E' }}>


      <div key={product.id} className=" w-auto max-h-[30rem] flex flex-col bg-white border-gray-200
  p-4 border-2 rounded-2xl shadow-slate-200 shadow-md">
        {favorito
          ? <FcLike onClick={handleFavourite} className='w-8 h-8 flex self-end' />
          : <AiOutlineHeart onClick={handleFavourite} className='w-8 h-8 flex self-end' />}
        <img className=" w-[200px] h-[200px] mt-2 self-center" src={product.image} alt="" srcset="" />
        <Link to={`/product/${product.slug}`}><h2 className="flex self-center mt-3  font-medium text-lg" >{product.name}</h2></Link>
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

          <div className="h-11 flex border-2 mt-2 border-celeste rounded-lg hover:border-celeste_oscuro">
            <button className=" w-28 bg-celeste  text-white font-semibold rounded-md hover:bg-celeste_oscuro" onClick={() => addToCartHandler(product)}>Buy</button>
            <img className="w-9 h-9 ml-2 mr-2" src={cart} alt="pasti" srcset="" />
          </div>
        </div>
      </div>

    </IconContext.Provider>


  );
}

export default Card;
