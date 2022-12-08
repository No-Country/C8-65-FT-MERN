import React, { useEffect, useState } from "react";
import axios from "axios";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import Card from "../productCard/ProductCard";
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai'
//swipper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Homee from "../Homee/Homee";
import AnimatedPage from "../AnimatedPage/AnimatedPage";
import Footer from '../Footer/Footer'

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true };
        case "FETCH_SUCCESS":
            return { ...state, products: action.payload, loading: false };
        case "FETCH_FAIL":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const Home = () => {
    const [{ loading, error, products }, dispatch] = useReducer(reducer, {
        products: [],
        loading: true,
        error: "",
    });


    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            try {
                const result = await axios.get("/api/products");
                dispatch({ type: "FETCH_SUCCESS", payload: result.data });
            } catch (err) {
                dispatch({ type: "FETCH_FAIL", payload: err.message });
            }


        };
        fetchData();
    }, []);



    return (
        <div className="m-auto max-w-7xl">

            <AnimatedPage >
                <Homee />
                <h3 className="font-semibold text-2xl ml-[6em] my-[60px] font-Montserrat">Productos del dia</h3>
                <div className="border-[1px] w-[90%] m-auto "></div>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    navigation={true}
                    autoplay={true}
                    modules={[Autoplay, Navigation, Thumbs]}
                    grabCursor={true}
                    className="  md:w-full"

                    breakpoints={{
                        659: {
                            slidesPerView: 2,
                        },
                        959: {
                            slidesPerView: 3,
                        },
                    }}

                >{

                        <div className="flex justify-center items-center h-screen space-x-5">

                            {products.map((product) => (
                                product.day && <SwiperSlide className=' flex items-center justify-center space-x-5 mt-[3rem]' key={product._id}>
                                    <Card product={product} ></Card>
                                </SwiperSlide>
                            ))}
                        </div>
                    }
                </Swiper>
                <Footer />
            </AnimatedPage>
        </div>
    );
};

export default Home;