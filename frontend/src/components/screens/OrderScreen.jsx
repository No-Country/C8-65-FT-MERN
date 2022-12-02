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
            <div className='container m-auto flex items-center justify-center'>
                <h3 className='my-3 text-lg font-semibold'>Orden {orderId} Generada con exito!</h3>
                {/* <img src='./img/carroVacio.svg' alt="" className="w-60 h-60 mx-auto " /> */}
            </div>
        </AnimatedPage>

    )
}

export default OrderScreen