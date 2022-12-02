import React from 'react'

const Checkout = (props) => {
    return (
        <ul className=' flex items-center md:static w-full justify-around'>
            <li className={props.step1 ? 'text-blue-500' : ''}>Sign-In</li>
            <li className={props.step2 ? 'text-blue-600' : ''}>Shipping</li>
            <li className={props.step3 ? 'text-blue-500' : ''}>Payment</li>
            <li className={props.step4 ? 'text-blue-600' : ''}>Place Order</li>
        </ul>
    )
}

export default Checkout