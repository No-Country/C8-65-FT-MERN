import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from "../productCard/ProductCard";
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
const Productos = () => {
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

        <div className='container w-[75%] flex flex-col m-auto my-6'>
            <h2 className='font-semibold text-2xl'>Todos los productos</h2>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {products.map((product) => (
                    <Card product={product} className='max-h-[10rem]' ></Card>
                ))}
            </div>
        </div>
    )
}

export default Productos