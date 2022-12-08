
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
            <AnimatedPage className='w-auto' >
                {orders?.length === 0 ? (
                    <div className='h-full w-full order'>
                        <h4 className='text-center m-7 font-semibold w-full'>No se ha registrado ninguna orden</h4>
                    </div>
                ) : (

                    <div className='   sm:rounded-lg order '>

                        <h1 className='text-center m-7 font-semibold'>Historial de ordenes</h1>
                        {loading ? (
                            <Loading />
                        ) : error ? (
                            <span>Error</span>
                        ) : (
                            <div class="flex flex-col">
                                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                        <div class="overflow-hidden">
                                            <table class="min-w-full">
                                                <thead class="text-xs text-gray-700 uppercase bg-[#3aa18b] dark:bg-[#3aa18b] dark:text-black">
                                                    <tr>
                                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                            ID
                                                        </th>
                                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                            FECHA
                                                        </th>
                                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                            TOTAL
                                                        </th>
                                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                            PAGO
                                                        </th>
                                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                            ENTREGADO
                                                        </th>
                                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                            ACCIONES
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {orders.map((order) => (
                                                        <tr class="border-b  dark:border-gray-700">
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order._id}</td>
                                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {order.createdAt.substring(0, 10)}
                                                            </td>
                                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {order.totalPrice.toFixed(2)}
                                                            </td>
                                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {order.isPaid ? order.paidAt.substring(0, 10) : 'No'}
                                                            </td>
                                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {order.isDelivered
                                                                    ? order.deliveredAt.substring(0, 10)
                                                                    : 'No'}
                                                            </td>
                                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                <button
                                                                    onClick={() => {
                                                                        navigate(`/order/${order._id}`);
                                                                    }}
                                                                >
                                                                    Detalles
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </AnimatedPage>
        </>
    );
}