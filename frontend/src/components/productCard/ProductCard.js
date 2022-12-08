import cart from "./cart.svg";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
//swipper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Store } from "../../Store";
import axios from "axios";
import { IconContext } from "react-icons/lib";
import { motion } from "framer-motion";

function Card(props) {

  const variants = {
    whileInViewText: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    whileInViewText2: { y: 0, opacity: 1, transition: { duration: 0.9 } },
    whileInViewText3: { y: 0, opacity: 1, transition: { duration: 1.2 } },
    initialText2: { y: 100, opacity: 0 }
  };

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { product } = props;
  const findFavorite = state.favorite.find((fav) => fav._id === product._id);
  const [favorito, setFavorito] = useState(false);
  useEffect(() => {
    setFavorito(findFavorite ? findFavorite.isFavorite : false);
  }, [findFavorite]);
  const {
    cart: { cartItems },
  } = state;
  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.stock < quantity) {
      window.alert("Producto sin stock");
      return;
    }
    // se usa ese nombre para no confundir con "dispatch"
    ctxDispatch({ type: "ADD_TO_CART", payload: { ...item, quantity } });
  };

  const handleFavourite = () => {
    if (!favorito)
      return ctxDispatch({ type: "ADD_TO_FAVORITE", payload: product });
    ctxDispatch({ type: "DELETE_TO_FAVORITE", payload: product });
  };
  return (
    <IconContext.Provider value={{ color: "#9E9E9E" }}>
      <div
        variants={variants}
        initial="initialText2"
        whileInView="whileInViewText"
        viewport="viewport"
        className=" w-auto max-h-[30rem] flex flex-col bg-white border-gray-200
  p-4 border-2 rounded-2xl shadow-slate-200 shadow-md"
      >
        {favorito ? (
          <FcLike
            onClick={handleFavourite}
            className="w-8 h-8 flex self-end cursor-pointer"
          />
        ) : (
          <AiOutlineHeart
            onClick={handleFavourite}
            className="w-8 h-8 flex self-end cursor-pointer"
          />
        )}
        <img
          className=" w-[200px] h-[200px] mt-2 self-center object-contain"
          src={product.image}
          alt=""

        />
        <Link to={`/product/${product.slug}`}>
          <h2 className="flex self-center mt-3  font-medium text-lg">
            {product.name}
          </h2>
        </Link>
        {/* <p className="flex mt-4 ml-2 text-gr" >{product.description}</p> */}

        <div className="flex row-auto mt-2 gap-2">
          {[...new Array(5)].map((item, index) => (
            <AiOutlineStar key={index} className="w-5 h-5 " />
          ))}
        </div>

        <div className="flex row-auto mt-2 space-x-14">
          <div className="">
            {product.day ? (
              <div>
                <p className="mt-2 ml-0 sm:ml-3">$ {product.precio * 0.30}</p>
                <p className="ml-3 text-gray-500 line-through">{product.precio}</p>
              </div>
            ) : (
              <p className="mt-2 ml-0 sm:ml-3">$ {product.precio}</p>
            )}
          </div>

          <div className="h-11 flex border-2 mt-2 border-celeste rounded-lg hover:border-celeste_oscuro">
            <button
              className=" w-28 bg-celeste  text-white font-semibold rounded-md hover:bg-celeste_oscuro transition ease-in-out delay-100"
              onClick={() => addToCartHandler(product)}
            >
              Buy
            </button>
            <img
              className="w-9 h-9 ml-2 mr-2"
              src={cart}
            />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Card;
