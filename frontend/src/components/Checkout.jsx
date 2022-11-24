import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Checkout = (props) => {
    return (
        <ul className=' flex items-center md:static w-full justify-around'>
            <li className={props.step1 ? 'bg-orange-400' : ''}>Sign-In</li>
            <li className={props.step2 ? 'bg-orange-400' : ''}>Shipping</li>
            <li className={props.step3 ? 'bg-orange-400' : ''}>Payment</li>
            <li className={props.step4 ? 'bg-orange-400' : ''}>Place Order</li>
        </ul>
    )
}

export default Checkout