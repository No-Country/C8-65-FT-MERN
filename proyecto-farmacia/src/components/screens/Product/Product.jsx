import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "./ProductStyle.css";

const Product = () => {
    const obj = {
        title: "BIODERMA SEBIUM H2O AGUA MICELAR 250 ML",
        price: 2000,
        quantity: 0,
        categories: ["asd", "222", "#"],
    };
    const { title, price, quantity, categories } = obj;
    return (
        <section className="w-full h-screen flex justify-center">
            <article className="w-10/12 p-10">
                <div className="w-full flex justify-between items-center  mb-6 flex-col md:flex-row sm:items-start">
                    <img
                        src="/logo192.png"
                        alt=""
                        className="w-[80%] sm:w-[50%] h-80 object-cover"
                    />
                    <div className="w-[80%] md:w-[40%]">
                        <h2 className="font-bold font-mono text-2xl md:text-4xl  ">{obj.title}</h2>
                        <div
                            className="flex flex-col mt-[1.2rem] h-full
                        gap-[1rem]"
                        >
                            <span className=" font-semibold text-xl">${price}</span>
                            <div className="flex gap-2">
                                <div className="flex gap-2">
                                    <button className="quantity-btn">-</button>
                                    <button className="text-1xl border-solid border-2 px-2 border-green-400 rounded-sm">
                                        {quantity}
                                    </button>
                                    <button className="quantity-btn">+</button>
                                </div>
                                <button className=""><AiOutlineHeart style={{ color: '#2ca289', fontSize: '2em' }} /></button>
                            </div>
                            <button className="bg-green-500 h-[2.3rem] w-[10rem] rounded-xl text-white">
                                Add Cart
                            </button>
                            <ul className="flex">
                                <li className="text-[1.2rem]" >Categorias: {categories && <span className="font-semibold text-[1rem]">{categories.join(", ")}</span>}</li>
                                {/* {categories.map((category, index) => (
                                    <li key={category}>{category}{categories.length - 1 === index ? "" : ","}</li>
                                ))} */}
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="w-[50%]">
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
