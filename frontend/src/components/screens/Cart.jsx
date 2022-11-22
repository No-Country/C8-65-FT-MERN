import React, { useContext } from 'react'


import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Store } from '../../Store';

const CartScreen = () => {
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
        <div className='w-[80%] flex m-auto mt-[50px] bg-red-600 h-6'>
            <div className='w-[65%] flex flex-row h-5 bg-blue-600'></div>
            <div className='w-[35%] flex flex-row h-5 bg-black'></div>
        </div>
    )
}

export default CartScreen