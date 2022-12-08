import React, { useContext, useEffect } from 'react'
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "./ProductStyle.css";
import { FcLike } from 'react-icons/fc'
import { Store } from '../../Store';


const ProductDetails = (data) => {
    const { state, dispatch } = useContext(Store)
    const CartItems = state.cart.cartItems
    const FindItem = CartItems.find(item => item.slug === data.slug)
    const { name, precio, image, receta, description, isFavorite, stock, category
    } = data;
    const [QuantityBuy, setQuantity] = useState(0)
    const findFavorite = state.favorite.find(fav => fav._id === data._id)
    console.log(findFavorite)
    const [FavProduct, setFav] = useState(findFavorite ? findFavorite.isFavorite : false)
    const [StockProduct, setStock] = useState(stock)
    const IncrementQuantity = () => {
        if (QuantityBuy >= StockProduct) return
        setQuantity(QuantityBuy + 1);
        return
    }
    const DecrementQuantity = () => {
        if (QuantityBuy === 0 || QuantityBuy > StockProduct) return
        setQuantity(QuantityBuy - 1)
        return
    }
    const addCartHandle = () => {
        if (QuantityBuy === 0) return
        if (QuantityBuy > StockProduct) {
            alert("Esta añadiendo más productos de los q hay en stock");
            return;
        }
        dispatch({ type: 'ADD_TO_CART', payload: { ...data, quantity: FindItem?.quantity + QuantityBuy || QuantityBuy } })
        setQuantity(0)

    }

    const HandleFavorite = () => {
        if (!FavProduct) return dispatch({ type: "ADD_TO_FAVORITE", payload: data })
        dispatch({ type: "DELETE_TO_FAVORITE", payload: data })
    }
    useEffect(() => {
        setStock(FindItem ? stock - FindItem.quantity : stock)
        setFav(findFavorite ? findFavorite.isFavorite : false)
    }, [addCartHandle, findFavorite])

    return (
        <article className="w-[100%]md:p-10 mt-10 order">
            <div className="w-full flex justify-between flex-col items-center gap-2 mb-6  md:flex-row md:items-start">
                <img
                    src={image}
                    alt={name}
                    className="w-[90%] lg:w-[50%] h-80 object-contain"
                />
                <div className="w-[80%] lg:w-[40%]">
                    <h2 className="font-bold font-mono text-3xl md:text-4xl lg:text-4xl text-center lg:text-start  ">{name}</h2>
                    <div
                        className="flex flex-col  md:items-start mt-[1.2rem] 
                gap-[1rem]"
                    >
                        <span className=" font-semibold text-xl md:text-[1.5rem]">${precio}</span>
                        <div className="flex gap-2 items-center">
                            <div className="flex gap-2">
                                <button onClick={DecrementQuantity} className="quantity-btn">-</button>
                                <span className="flex justify-center items-center text-1xl border-solid border-2 px-2 border-celeste rounded-sm md:text-[1.3rem] ">
                                    {QuantityBuy}
                                </span>
                                <button onClick={IncrementQuantity} className="quantity-btn">+</button>
                            </div>
                            <span className="text-xl md:text-2xl font-bold text-celeste">{StockProduct}Disp</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={addCartHandle} className={`bg-celeste ${QuantityBuy === 0 ? "cursor-not-allowed" : ""} hover:bg-celeste_oscuro h-[2.3rem] w-[12rem] text-[1rem] md:text-[1.2rem] lg:w-[10rem] rounded-xl text-white`}>
                                Add Cart
                            </button>
                            <button className="" onClick={HandleFavorite}>{FavProduct ? <FcLike style={{ color: '#2ca289', fontSize: '2em' }} /> : <AiOutlineHeart style={{ color: '#2ca289', fontSize: '2em' }} />}</button>
                        </div>
                        <ul className="flex flex-col">
                            <li className="text-[1.1rem] text-celeste" >Categorias: {category && <span className="font-semibold text-[1rem]">{!Array.isArray(category) ? category : category.join(", ")}</span>}</li>
                            <li className="text-[1.1rem] text-celeste" >Necesita receta: {receta ? "Si" : "No"}</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="pl-[3rem] w-[80%] lg:w-[50%]">
                <h3 className="border-solid border-celeste border-b-4 inline">
                    Descripción
                </h3>
                <p>{description}</p>
            </div>
        </article>
    )
}

export default ProductDetails