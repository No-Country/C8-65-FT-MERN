import React from "react";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "./ProductStyle.css";

const Product = () => {
    const obj = {
        title: "BIODERMA SEBIUM H2O AGUA MICELAR 250 ML",
        price: 2000,
        quantity: 0,
        categories: ["asd", "222", "#"],
        stock: 10,
        receta: false,
        isFavorite: false,
    };

    const { title, price, quantity, receta, isFavorite, stock, categories } = obj;
    const [QuantitBuy, setQuantity] = useState(quantity)
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
        <section className="w-full h-screen flex justify-center">
            <article className="w-10/12 p-10">
                <div className="w-full flex justify-between flex-col items-center gap-2 mb-6  md:flex-row md:items-start">
                    <img
                        src="/logo192.png"
                        alt=""
                        className="w-[80%] md:w-[50%] h-80 object-cover"
                    />
                    <div className="w-[80%] md:w-[40%]">
                        <h2 className="font-bold font-mono text-3xl md:text-4xl text-center md:text-start  ">{obj.title}</h2>
                        <div
                            className="flex flex-col  md:items-start mt-[1.2rem] h-full
                        gap-[1rem]"
                        >
                            <span className=" font-semibold text-xl">${price}</span>
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
                                <button className=""><AiOutlineHeart style={{ color: '#2ca289', fontSize: '2em' }} /></button>
                            </div>
                            <ul className="flex flex-col">
                                <li className="text-[1.2rem]" >Categorias: {categories && <span className="font-semibold text-[1rem]">{categories.join(", ")}</span>}</li>
                                <li className="text-[1.2rem]" >Receta: {receta ? "Si" : "No"}</li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="w-[100%] md:w-[50%]">
                    <h3 className="border-solid border-green-500 border-b-4 inline">
                        Description
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos, quia quam. Voluptate fugit vero distinctio ipsam, minus
                        laboriosam facilis? Fuga tempora distinctio adipisci, veniam in
                        praesentium! Alias sequi saepe beatae.
                    </p>
                </div>
            </article>
        </section>
    );
};

export default Product;
