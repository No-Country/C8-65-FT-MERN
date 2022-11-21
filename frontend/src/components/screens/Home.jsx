import React, { useEffect, useState } from "react";
import axios from "axios";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import logger from "use-reducer-logger";
import Card from "../productCard/ProductCard";
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
//swipper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
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


    console.log(products);
    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            navigation={true}
            modules={[Autoplay, Navigation, Thumbs]}
            grabCursor={true}
            className="  md:w-full"

            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
            }}

        >{
                <div className="flex justify-center items-center h-screen space-x-5">
                    {products.map((product) => (
                        <SwiperSlide className='flex items-center justify-center h-screen space-x-5 mt-20' key={product._id}>
                            <Card product={product} ></Card>
                        </SwiperSlide>
                    ))}
                </div>
            }
        </Swiper>
    );
};

export default Home;