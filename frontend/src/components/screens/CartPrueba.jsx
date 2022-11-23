import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../../Store";
import axios from 'axios';

function Example() {
    const navigate = useNavigate();

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { cartItems }
    } = state;

    const updateCartHandler = async (item, quantity) => {
        const { data } = await axios.get(`/api/products/${item._id}`);
        if (data.stock < quantity) {
            window.alert('Producto sin stock');
            return;
        }
        // se usa ese nombre para no confundir con "dispatch"
        ctxDispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity } })

    };
    const removeItemCart = (item) => {
        ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item })
    }

    const checkoutHandler = (item) => {
        navigate('/signin?redirect=/shipping');
    }

    console.log(cartItems);
    return (
        <>
            {cartItems.length === 0 ?
                (
                    <div className="flex  w-full h-screen m-auto flex-col">
                        <img src='./img/carroVacio.svg' alt="" className="w-60 h-60 mx-auto " />
                        <h3 className="font-semibold mx-auto my-1 text-2xl">Todavia no hay productos en el carro</h3>
                        <Link to='/' className="mx-auto">Regresar a la tienda</Link>
                    </div>
                )
                : (
                    <div className="lg:container  lg:mx-auto lg:mt-10 my-7 px-5 ">
                        <div className="flex md:my-10 md:flex-row flex-col">
                            <div className="w-full bg-white md:px-10 md:py-10">
                                <div className="flex md:justify-between justify-center md:pb-2 md:ml-10">
                                    <h1 className="font-semibold md:text-2xl">Carro</h1>
                                </div>
                                {cartItems.map((item) => (
                                    <div className="flex items-center md:mx-8 md:my-8 md:px-4 md:py-4 rounded-2xl border-gray-300 md:border-2 ">
                                        <div className="flex w-2/5">
                                            <div className="w-20">
                                                <img className="md:h-28 md:w-28 h-20 w-20" src={item.image} alt="" />
                                            </div>
                                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                                <span className="font-bold text-sm">{item.name}</span>
                                                <span className="text-red-500 text-xs">Id del producto: {item._id}</span>
                                                <button className='text-left' onClick={() => removeItemCart(item)}>
                                                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs text-left">Eliminar</a>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex justify-center w-1/5 flex-col">
                                            <div className="flex justify-center">
                                                <button variant='light' disabled={item.quantity === 1}
                                                    onClick={() => updateCartHandler(item, item.quantity - 1)}>
                                                    <i className=" text-[#2ca289] text-4xl">-</i>
                                                </button>{' '}

                                                <span className="m-2 mx-4">{item.quantity}</span>{' '}
                                                <button variant='light' disabled={item.quantity === item.stock}
                                                    onClick={() => updateCartHandler(item, item.quantity + 1)}>
                                                    <i className=" text-[#2ca289] text-4xl">+</i>
                                                </button>

                                            </div>
                                            {item.quantity === item.stock ? (<div className="flex flex-row m-auto">
                                                <img src='./img/delete.png' alt="" className="h-3 w-3 m-auto" />
                                                <span className=" text-xs px-1">Sin stock</span>
                                            </div>) : (<div className="flex flex-row m-auto">
                                                <img src='./img/accept.png' alt="" className="h-3 w-3 m-auto" />
                                                <span className=" text-xs px-1">En stock</span>
                                            </div>)}
                                        </div>
                                        <div className=" w-1/5 flex justify-center flex-col">
                                            <span className="text-sm text-center">Precio/unidad: </span>
                                            <span className="text-center font-semibold text-sm">{item.precio}$</span>
                                        </div>
                                        <div className=" w-1/5 flex justify-center flex-col">
                                            <span className="text-sm text-center">Total:</span>
                                            <span className="text-center font-semibold text-sm">{item.precio * item.quantity}$</span>
                                        </div>
                                    </div>
                                ))}


                                <Link to='/' className="flex font-semibold text-indigo-600 text-sm mt-10">

                                    <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                    Seguir comprando
                                </Link>
                            </div>

                            <div id="summary" className="md:w-1/4 w-[80%] px-8 py-10 mx-auto">
                                <h1 className="font-semibold text-2xl border-b pb-8">Resumen de la compra</h1>
                                <div className="flex justify-between mt-10 mb-5">
                                    <span className="font-semibold text-sm uppercase">Items </span>
                                    <span className="font-semibold text-sm">({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                                        items)</span>
                                </div>
                                <div className="border-t mt-8">
                                    <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                        <span>Total cost</span>
                                        <span>{cartItems.reduce((a, c) => a + c.precio * c.quantity, 0)}$</span>
                                    </div>
                                    <button className="border rounded-2xl bg-[#00ACC1] font-semibold hover:bg-[#0097A7] py-3 text-sm text-white uppercase w-full" onClick={checkoutHandler}>Checkout</button>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
        </>
    );
}

export default Example;