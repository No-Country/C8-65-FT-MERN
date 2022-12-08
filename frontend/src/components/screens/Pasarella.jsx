import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Store } from '../../Store';
import AnimatedPage from '../AnimatedPage/AnimatedPage';

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
    const [email, setemail] = useState(shippingAddress.email || '');
    const [numero, setNumero] = useState(shippingAddress.numero || '');


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
                email,
                numero
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
                email,
                numero
            })
        );
        navigate('/payment')
    };

    return (
        <AnimatedPage>
            <div>
                <Checkout step1 step2></Checkout>
                <div className='w-[70%] md:w-[40%] flex mx-auto flex-col  items-center'>
                    <h3 className='text-left w-full ml-2 my-8 text-xl'>Checkout</h3>
                    <form onSubmit={submitHandler} className='ml-0 w-full flex flex-col  '>
                        <div className='flex flex-col' >
                            <label>Full Name</label>
                            <input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                                type='text'
                                className='my-3 rounded-2xl border-2 border-gray-200 p-1 px-3 text-sm md:text-base'
                            />
                        </div>
                        <div className='flex flex-col' >
                            <label>Address</label>
                            <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                                type='text'
                                className='my-3 rounded-2xl border-2 border-gray-200 p-1 px-3 text-sm md:text-base'
                            />
                        </div>
                        <div className="flex flex-col" >
                            <label>City</label>
                            <input
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                                type='text'
                                className='my-3 rounded-2xl border-2 border-gray-200 p-1 px-3 text-sm md:text-base'
                            />
                        </div>
                        <div className="flex flex-col" >
                            <label>Postal Code</label>
                            <input
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                required
                                type='number'
                                className='my-3 rounded-2xl border-2 border-gray-200 p-1 px-3 text-sm md:text-base'
                            />
                        </div>
                        <div className="flex flex-col" >
                            <label>Country</label>
                            <input
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                                type='text'
                                className='my-3 rounded-2xl border-2 border-gray-200 p-1 px-3 text-sm md:text-base'
                            />

                        </div>
                        <div className="flex flex-col">
                            <label>Email</label>
                            <input
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                required
                                type='text'
                                className='my-3 rounded-2xl border-2 border-gray-200 p-1 px-3 text-sm md:text-base'
                            />

                        </div>
                        <div className="flex flex-col">
                            <label>Numero de celular</label>
                            <input
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                                type='text'
                                required
                                className='my-3 rounded-2xl border-2 border-gray-200 p-1 px-3 text-sm md:text-base'
                            />

                        </div>
                        <div className="mb-3 my-3 text-center">
                            <button
                                className='bg-[#00bcd4] p-4 rounded-2xl w-[50%] text-white hover:bg-[#0097a7] trasition-all duration-300 ease-in md:text-lg text-sm'
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </AnimatedPage>
    )
}

export default Pasarella