import React from 'react'
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "./ProductStyle.css";
import { FcLike } from 'react-icons/fc'


const ProductDetails = (data) => {
    console.log(data)
    // const obj = {
    //     title: "BIODERMA SEBIUM H2O AGUA MICELAR 250 ML",
    //     price: 2000,
    //     quantity: 0,
    //     categories: ["asd", "222", "#"],
    //     stock: 10,
    //     receta: false,
    //     isFavorite: false,
    // };

    const { name, precio, image, quantity, receta, description, isFavorite, stock, category } = data;
    const [QuantitBuy, setQuantity] = useState(quantity || 0)
    const [FavProduct, setFav] = useState(isFavorite)
    const IncrementQuantity = () => {
        if (QuantitBuy < stock) setQuantity(QuantitBuy + 1);
        return
    }
    const DecrementQuantity = () => {
        if (QuantitBuy !== 0 && QuantitBuy <= stock) return setQuantity(QuantitBuy - 1)
        return
    }
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
                                <button className="text-1xl border-solid border-2 px-2 border-green-400 rounded-sm">
                                    {QuantitBuy}
                                </button>
                                <button onClick={IncrementQuantity} className="quantity-btn">+</button>
                            </div>
                            <span className="text-xl font-bold text-green-500">{stock}Disp</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="bg-green-500 h-[2.3rem] w-[12rem] md:w-[10rem] rounded-xl text-white">
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