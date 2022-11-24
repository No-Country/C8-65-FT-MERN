import React from "react";
import ProductDetails from "../../ProductDetails/ProductDetails";
import axios from 'axios'
import { useQuery } from 'react-query'
import { useParams, redirect } from "react-router-dom";
import Loading from "../../Loading/Loading";
import ErrorDetails from "../../ErrorDetails/ErrorDetails";
const Product = () => {
    const { product } = useParams()
    const fetchdata = () => {
        return axios.get(`/api/products/slug/${product}`)
    }
    const { data, isError, isLoading } = useQuery("products", fetchdata)

    if (isLoading || isError) {
        return (
            <section className="w-full h-screen">
                {isError && <ErrorDetails />}
                {isLoading && <Loading />}
            </section>
        )
    }
    return (

        <section className="w-full h-screen flex justify-center">
            {data?.data && <ProductDetails {...data.data} />}
        </section >
    );
};

export default Product;
