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
    const [FavProduct, setFav] = useState(isFavorite)
    const [StockProduct, setStock] = useState(stock)
    const IncrementQuantity = () => {
        if (QuantityBuy < StockProduct) setQuantity(QuantityBuy + 1);
        return
    }
    const DecrementQuantity = () => {
        if (QuantityBuy !== 0 && QuantityBuy <= StockProduct) return setQuantity(QuantityBuy - 1)
        return
    }
    const addCartHandle = () => {
        if (QuantityBuy === 0) return
        if (QuantityBuy > StockProduct) {
            alert("Esta añadiendo más productos de los q hay en stock")
            return
        }
        dispatch({ type: 'ADD_TO_CART', payload: { ...data, quantity: FindItem?.quantity + QuantityBuy || QuantityBuy } })
        setQuantity(0)

    }
    useEffect(() => {
        setStock(FindItem ? stock - FindItem.quantity : stock)
    }, [FindItem?.quantity || stock])

    return (
        <article className="w-[100%] md:w-10/12 md:p-10">
            <div className="w-full flex justify-between flex-col items-center gap-2 mb-6  md:flex-row md:items-start">
                <img
                    src={image}
                    alt={name}
                    className="w-[80%] md:w-[50%] h-80 object-contain"
                />
                <div className="w-[80%] md:w-[40%]">
                    <h2 className="font-bold font-mono text-3xl md:text-4xl text-center md:text-start  ">{name}</h2>
                    <div
                        className="flex flex-col  md:items-start mt-[1.2rem] h-full
                gap-[1rem]"
                    >
                        <span className=" font-semibold text-xl">${precio}</span>
                        <div className="flex gap-2 items-center">
                            <div className="flex gap-2">
                                <button onClick={DecrementQuantity} className="quantity-btn">-</button>
                                <button className="text-1xl border-solid border-2 px-2 border-celeste rounded-sm">
                                    {QuantityBuy}
                                </button>
                                <button onClick={IncrementQuantity} className="quantity-btn">+</button>
                            </div>
                            <span className="text-xl font-bold text-celeste">{StockProduct}Disp</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={addCartHandle} className={`bg-celeste ${QuantityBuy === 0 ? "cursor-not-allowed" : ""} h-[2.3rem] w-[12rem] md:w-[10rem] rounded-xl text-white`}>
                                Add Cart
                            </button>
                            <button className="" onClick={() => setFav(!FavProduct)}>{FavProduct ? <FcLike style={{ color: '#2ca289', fontSize: '2em' }} /> : <AiOutlineHeart style={{ color: '#2ca289', fontSize: '2em' }} />}</button>
                        </div>
                        <ul className="flex flex-col">
                            <li className="text-[1.2rem]" >Categorias: {category && <span className="font-semibold text-[1rem]">{!Array.isArray(category) ? category : category.join(", ")}</span>}</li>
                            <li className="text-[1.2rem]" >Receta: {receta ? "Si" : "No"}</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="w-[100%] md:w-[50%]">
                <h3 className="border-solid border-green-500 border-b-4 inline">
                    Description
                </h3>
                <p>{description}</p>
            </div>
        </article>
    )
}

export default ProductDetails