import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Store } from '../../Store';
import Checkout from '../Checkout';
import AnimatedPage from '../AnimatedPage/AnimatedPage';



const MetodoDePago = () => {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { shippingAddress, paymentMethod },
    } = state;

    const [paymentMethodName, setPaymentMethod] = useState(
        paymentMethod || 'MercadoPago'
    );

    useEffect(() => {
        if (!shippingAddress.address) {
            navigate('/shipping');
        }
    }, [shippingAddress, navigate]);
    const submitHandler = (e) => {
        e.preventDefault();
        ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
        localStorage.setItem('paymentMethod', paymentMethodName);
        navigate('/placeorder');
    };
    return (
        <AnimatedPage>
            <div className='order'>
                <Checkout step1 step2 step3></Checkout>
                <div className="container small-container mx-auto w-full h-auto flex items-center flex-col my-5 ">
                    <h4 className="my-3 text-lg font-semibold mx-6">Metodo de pago</h4>
                    <form onSubmit={submitHandler} className='border-2 rounded-2xl p-7'>
                        <div className="mb-3">
                            <label className='mx-3'>PayPal</label>
                            <input
                                type="radio"
                                id="PayPal"
                                label="PayPal"
                                value="PayPal"
                                checked={paymentMethodName === 'PayPal'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='mx-3'>Mercado Pago</label>
                            <input
                                type="radio"
                                id="MercadoPago"
                                label="MercadoPago"
                                value="MercadoPago"
                                checked={paymentMethodName === 'MercadoPago'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                        </div>
                        <div className="mb-3 flex justify-center m-auto items-center">
                            <button type="submit" className='w-28 bg-celeste  text-white font-semibold rounded-md hover:bg-celeste_oscuro'>Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default MetodoDePago