import axios from 'axios';
import React, { useReducer } from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Store } from '../../Store';
import AnimatedPage from '../AnimatedPage/AnimatedPage';



const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true, error: '' };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, order: action.payload, error: '' };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state
    }
}
const OrderScreen = () => {
    const { state } = useContext(Store)
    const { userInfo } = state;

    const params = useParams();
    const { id: orderId } = params
    const navigate = useNavigate();

    const [{ loading, error, order, successPay, loadingPay }, dispatch] = useReducer(reducer, {
        loading: true,
        order: {},
        error: '',
        successPay: false,
        loadingPay: false,
    });


    useEffect(() => {
        const fetchOrder = async () => {
            try {
                dispatch({ type: 'FETCH_REQUEST' });
                const { data } = await axios.get(`/api/orders/${orderId}`, {
                    headers: { authorization: `Bearer ${userInfo.token}` },
                });
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err });
            }
        };

        fetchOrder();

    }, [navigate, userInfo, order, orderId])


    return (
        <AnimatedPage>
            <div className='lg:container  lg:mx-auto lg:mt-10 my-7 px-5 '>

                <div className='flex md:my-10 md:flex-row flex-col'>

                    <div className='"w-full bg-white md:px-10 md:py-10'>
                        <div className="flex md:justify-between justify-center md:pb-2 md:ml-10">
                            <h3 className="font-semibold md:text-2xl">Orden {orderId}</h3>
                        </div>
                        <div className='mb-3'>
                            <div>
                                <h3>Direccion</h3>
                                <div>
                                    <strong>Nombre: </strong>  {order.shippingAddress?.fullName} <br />
                                    <strong>Direccion: </strong> {order.shippingAddress?.address},
                                    {order.shippingAddress?.city}, {order.shippingAddress?.postalCode}
                                    ,{order.shippingAddress?.country}
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div>
                                <strong>Metodo de pago: </strong>{order.paymentMethod}
                            </div>

                        </div>

                        {order.orderItems?.map((item) => (
                            <div className="flex items-center md:mx-8 md:my-8 md:px-4 md:py-4 rounded-2xl border-gray-300 md:border-2 " key={orderId}>
                                <div className="flex w-4/5">
                                    <div className="w-20">
                                        <img className="md:h-20 md:w-20 h-20 w-20" src={item.image} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <span className="font-bold text-sm">{item.name}</span>
                                        <span className="text-red-500 text-xs">Id del producto: {item._id}</span>
                                    </div>
                                </div>
                                <div className=" w-1/5 flex justify-center flex-col">
                                    <span className="text-sm text-center">Cantidad:</span>
                                    <span className="text-center font-semibold text-sm">{item.quantity}</span>
                                    <span className="text-sm text-center">Total:</span>
                                    <span className="text-center font-semibold text-sm">{item.precio * item.quantity}$</span>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className=' w-[30%] px-8 py-10 mx-auto'>
                        <div id="summary" className="w-auto px-8 py-10 mx-auto">
                            <h1 className="font-semibold text-2xl  pb-8">Resumen de la compra</h1>
                            <div className="">
                                <div className="flex font-semibold justify-between py-6 text-sm uppercase flex-col">
                                    <div className='my-3'>
                                        <span>Total de la compra: </span>
                                        <span>${order.totalPrice?.toFixed(2)}</span>
                                    </div>
                                    <div className='my-3'>
                                        <span>Fecha de creacion: </span>
                                        <span>{order.createdAt?.substring(0, 10)}</span>
                                    </div>
                                    <div className='my-3'>
                                        <span>{order.isPaid ? 'Pagado' : 'No pago'}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>

    )
}

export default OrderScreen