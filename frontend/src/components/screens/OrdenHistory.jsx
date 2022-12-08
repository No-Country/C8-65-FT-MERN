
import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Store } from '../../Store';
import AnimatedPage from '../AnimatedPage/AnimatedPage';
import Loading from '../Loading/Loading';


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, orders: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default function OrderHistoryScreen() {
    const { state } = useContext(Store);
    const { userInfo } = state;
    const navigate = useNavigate();

    const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
    });
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const { data } = await axios.get(
                    `/api/orders/mine`,

                    { headers: { Authorization: `Bearer ${userInfo.token}` } }
                );
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (error) {
                dispatch({
                    type: 'FETCH_FAIL',
                    payload: error,
                });
            }
        };
        fetchData();
    }, [userInfo]);
    return (
        <>
            <AnimatedPage >
                {orders?.length === 0 ? (
                    <div className='h-full w-full order'>
                        <h4 className='text-center m-7 font-semibold w-full'>No se ha registrado ninguna orden</h4>
                    </div>
                ) : (

                    <div className='  shadow-md sm:rounded-lg order'>

                        <h1 className='text-center m-7 font-semibold'>Historial de ordenes</h1>
                        {loading ? (
                            <Loading />
                        ) : error ? (
                            <span>Error</span>
                        ) : (
                            <table className="w-full text-sm text-left  dark:text-gray-400">
                                <thead className='text-xs text-gray-700 uppercase bg-[#3aa18b] dark:bg-[#3aa18b] dark:text-black'>
                                    <tr>
                                        <th scope="col" className="py-3 px-6">ID</th>
                                        <th scope="col" className="py-3 px-6">DATE</th>
                                        <th scope="col" className="py-3 px-6">TOTAL</th>
                                        <th scope="col" className="py-3 px-6">PAID</th>
                                        <th scope="col" className="py-3 px-6">DELIVERED</th>
                                        <th scope="col" className="py-3 px-6">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order._id} className='bg-white border-b  dark:border-gray-700'>
                                            <th scope="row" className='py-4 px-6 font-medium  whitespace-nowrap '>{order._id}</th>
                                            <td className="py-4 px-6">{order.createdAt.substring(0, 10)}</td>
                                            <td className="py-4 px-6">{order.totalPrice.toFixed(2)}</td>
                                            <td className="py-4 px-6">{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                                            <td className="py-4 px-6">
                                                {order.isDelivered
                                                    ? order.deliveredAt.substring(0, 10)
                                                    : 'No'}
                                            </td>
                                            <td className="py-4 px-6">
                                                <button
                                                    onClick={() => {
                                                        navigate(`/order/${order._id}`);
                                                    }}
                                                >
                                                    Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
            </AnimatedPage>
        </>
    );
}