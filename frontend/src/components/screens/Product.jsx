import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import axios from 'axios'
import { useQuery } from 'react-query'
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import ErrorDetails from "../ErrorDetails/ErrorDetails";
import AnimatedPage from "../AnimatedPage/AnimatedPage";
const Product = () => {
    const { product } = useParams()
    const fetchdata = () => {
        return axios.get(`/api/products/slug/${product}`)
    }
    const { data, isError, isFetching, isLoading } = useQuery("products", fetchdata)

    if (isLoading || isError || isFetching) {
        return (
            <AnimatedPage>
                <section className="w-full h-screen">
                    {isError && <ErrorDetails />}
                    {isFetching && <Loading />}
                    {isLoading && <Loading />}
                </section>
            </AnimatedPage>
        )
    }
    return (
        <AnimatedPage>
            <section className="w-full flex justify-center">
                {data?.data && <ProductDetails {...data.data} />}
            </section >
        </AnimatedPage>
    );
};

export default Product;
