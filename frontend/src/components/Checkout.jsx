import React from 'react'

const Checkout = (props) => {
    return (
        <div className='flex items-center justify-center'>
            <ul className=' flex items-center  lg:w-[65%] justify-around my-5  w-[70%]'>
                <li className={`border border-[#24BAA0] text-[#B3E8E5] p-3 lg:text-xl sm:text-sm text-xs md:px-6 px-1 font-semibold  rounded-xl transition duration-150 ease-in-out  ${props.step1 ? 'bg-[#3aa18b]' : ''}`}>Sign-In</li>
                <li className={`border border-[#24BAA0] text-[#B3E8E5] p-3 lg:text-xl sm:text-sm text-xs md:px-6 px-1 font-semibold  rounded-xl transition duration-150 ease-in-out  ${props.step2 ? 'bg-[#3aa18b]' : ''}`}>Shipping</li>
                <li className={`border border-[#24BAA0] text-[#B3E8E5] p-3 lg:text-xl sm:text-sm text-xs md:px-6 px-1 font-semibold  rounded-xl transition duration-150 ease-in-out  ${props.step3 ? 'bg-[#3aa18b]' : ''}`}>Payment</li>
                <li className={`border border-[#24BAA0] text-[#B3E8E5] p-3 lg:text-xl sm:text-sm text-xs md:px-6 px-1 font-semibold  rounded-xl transition duration-150 ease-in-out  ${props.step4 ? 'bg-[#3aa18b]' : ''}`}>Place Order</li>
            </ul>
        </div>
    )
}

export default Checkout