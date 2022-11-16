import React from 'react'
import './ProductStyle.css'

const Product = () => {
    const obj = {
        title: "Zapatillas",
        price: 2000,
        quantity: 0,

    }
    const { title, price, quantity } = obj
    return (
        <section className='w-full h-screen flex justify-center'>
            <article className='w-10/12 p-10'>
                <div className='w-full flex justify-between'>
                    <div className='w-[50%] h-80 bg-black'></div>
                    <div className='w-[40%]'>
                        <h2 className='font-bold font-mono text-3xl'>{obj.title}</h2>
                        <div className='flex flex-col justify-center gap-3 mt-10'>
                            <span className=' text-xl'>${price}</span>
                            <div className='flex gap-2'>
                                <div className='flex gap-2'>
                                    <button className='quantity-btn'>-</button>
                                    <button className='text-1xl border-solid border-2 px-2 border-green-400 rounded-sm'>{quantity}</button>
                                    <button className='quantity-btn'>+</button>
                                </div>
                                <button className=''>{"<3"}</button>
                            </div>
                            <button className='bg-green-500 h-[2.3rem] w-[10rem] rounded-xl text-white'>Add Cart</button>
                        </div>
                    </div>
                </div>
            </article>


        </section>
    )
}

export default Product