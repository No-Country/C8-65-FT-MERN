import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';
import { Store } from '../../Store';

import Checkout from '../Checkout';



const Pasarella = () => {
    const navigate = useNavigate();

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        fullBox,
        userInfo,
        cart: { shippingAddress },
    } = state;

    const [fullName, setFullName] = useState(shippingAddress.fullName || '');
    const [address, setAddress] = useState(shippingAddress.address || '');
    const [city, setCity] = useState(shippingAddress.city || '');
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
    const [country, setCountry] = useState(shippingAddress.country || '');

    useEffect(() => {
        if (!userInfo) {
            navigate('/signin?redirect=/shipping')
        }
    }, [userInfo, navigate])

    const submitHandler = (e) => {
        e.preventDefault();

        ctxDispatch({
            type: 'SAVE_SHIPPING_ADDRESS',
            payload: {
                fullName,
                address,
                city,
                postalCode,
                country,
            },
        });
        localStorage.setItem(
            'shippingAddress',
            JSON.stringify({
                fullName,
                address,
                city,
                postalCode,
                country,
            })
        );
        navigate('/payment')
    };

    console.log(shippingAddress);
    return (
        <div>
            <Checkout step1 step2></Checkout>
            <div className='w-[40%] flex mx-auto flex-col  items-center'>
                <h3 className='text-left w-full ml-2 my-8 text-xl'>Checkout</h3>
                <form onSubmit={submitHandler} className='ml-0 w-full flex flex-col  '>
                    <div className='mb-3' controlId='fullname'>
                        <label>Full Name</label>
                        <input
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            type='text'
                        />
                    </div>
                    <div className='mb-3' controlId='address'>
                        <label>Address</label>
                        <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            type='text'
                        />
                    </div>
                    <div className="mb-3" controlId="city">
                        <label>City</label>
                        <input
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            type='text'
                        />
                    </div>
                    <div className="mb-3" controlId="postalCode">
                        <label>Postal Code</label>
                        <input
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            required
                            type='number'
                        />
                    </div>
                    <div className="mb-3" controlId="country">
                        <label>Country</label>
                        <input
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                            type='text'
                        />
                    </div>
                    <div className="mb-3">
                        <button
                        >
                            Continue
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Pasarella