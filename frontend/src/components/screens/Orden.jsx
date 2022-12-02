import React, { useContext, useReducer } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
import { Store } from '../../Store'
import Checkout from '../Checkout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedPage from '../AnimatedPage/AnimatedPage'

const reducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_REQUEST':
            return { ...state, loading: true };
        case 'CREATE_SUCCESS':
            return { ...state, loading: false };
        case 'CREATE_FAIL':
            return { ...state, loading: false };
        default:
            return state;
    }
}
const Orden = () => {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);



    const placeOrderHandler = async () => {

        try {
            dispatch({ type: 'CREATE_REQUEST' });
            const { data } = await axios.post(
                '/api/orders',
                {
                    orderItems: cart.cartItems,
                    shippingAddress: cart.shippingAddress,
                    paymentMethod: cart.paymentMethod,
                    totalPrice: cart.totalPrice,
                },
                {
                    headers: {
                        authorization: `Bearer ${userInfo.token}`,
                    },
                }
            );
            ctxDispatch({ type: 'CART_CLEAR' });
            dispatch({ type: 'CREATE_SUCCESS' });
            localStorage.removeItem('cartItems');
            navigate(`/order/${data.order._id}`);
            console.log('orden generada');
        } catch (err) {
            dispatch({ type: 'CREATE_FAIL' });
            console.log('Error con la compra');
        }
    }

    const [{ loading }, dispatch] = useReducer(reducer, {
        loading: false,
    });
    const { cart, userInfo } = state;
    cart.itemsPrice = cart.cartItems.reduce((a, c) => a + c.quantity * c.precio, 0)
    const alerta = () => {
        toast('Orden generada con exito!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    cart.totalPrice = cart.itemsPrice
    console.log(cart);
    return (
        <>
            <AnimatedPage>
                <div className='lg:container  lg:mx-auto lg:mt-10 my-7 px-5 '>
                    {/* <Checkout step1 step2 step3 step4></Checkout> */}

                    <div className='flex md:my-10 md:flex-row flex-col'>

                        <div className='"w-full bg-white md:px-10 md:py-10'>
                            <div className="flex md:justify-between justify-center md:pb-2 md:ml-10">
                                <h3 className="font-semibold md:text-2xl">Resumen de orden</h3>
                            </div>
                            <div className='mb-3'>
                                <div>
                                    <h3>Direccion</h3>
                                    <div>
                                        <strong>Nombre:</strong> {cart.shippingAddress.fullName} <br />
                                        <strong>Direccion: </strong> {cart.shippingAddress.address},
                                        {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                                        ,{cart.shippingAddress.country}
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                            <Card className='mb-3'>
                                <Card.Body>
                                    <Card.Title>Pago</Card.Title>
                                    <Card.Text>
                                        <strong>Metodo de pago:</strong>{cart.paymentMethod}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            {cart.cartItems.map((item) => (
                                <div className="flex items-center md:mx-8 md:my-8 md:px-4 md:py-4 rounded-2xl border-gray-300 md:border-2 ">
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
                            <Link to='/shipping' className="flex font-semibold text-indigo-600 text-sm mt-10">

                                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                Editar informacion
                            </Link>
                        </div>
                        <div className='md:w-1/4 w-[80%] px-8 py-10 mx-auto'>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Suma</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Total de la compra</Col>
                                                <Col>${cart.totalPrice}</Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-grid">
                                                <button
                                                    onClick={placeOrderHandler}
                                                    disabled={cart.cartItems.length === 0}
                                                    className='border rounded-2xl bg-[#00ACC1] font-semibold hover:bg-[#0097A7] py-2 text-sm text-white uppercase w-full'
                                                >
                                                    Generar Orden
                                                </button>
                                                <button
                                                    onClick={alerta}
                                                    disabled={cart.cartItems.length === 0}
                                                    className='border rounded-2xl bg-[#00ACC1] font-semibold hover:bg-[#0097A7] py-2 text-sm text-white uppercase w-full'
                                                >
                                                    alerta
                                                </button>
                                            </div>
                                            {loading && <p>Cargando...</p>}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>

                            </Card>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />
            </AnimatedPage>
        </>
    )
}

export default Orden