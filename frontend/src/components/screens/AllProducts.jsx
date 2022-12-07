import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from '../Filter/Filter';
// import { styled } from "@mui/material/styles";
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import AnimatedPage from '../AnimatedPage/AnimatedPage';
import Search from '../Search';
import List from '../List/List'
const Productos = () => {




    const [selectedCategory, setSelectedCategory] = useState(null);
    const [list, setList] = useState([]);
    const [inputSearch, setInputSearch] = useState("");

    const handleSelectCategory = (event, value) =>
        !value ? null : setSelectedCategory(value);

    const filtrarTodos = () => {
        setSelectedCategory(null)
    }





    useEffect(() => {
        const applyFilters = async () => {

            let updateProductList = await axios.get("/api/products");
            let result = updateProductList.data;

            //Category Filters
            if (selectedCategory) {
                result = result.filter((item) => item.category === selectedCategory);
            }

            // Search Filter
            if (inputSearch) {
                result = result.filter((item) => item.name.toLowerCase().search(inputSearch.toLowerCase().trim()) !== -1);
            }

            setList(result);
        };
        applyFilters();
    }, [selectedCategory, inputSearch]);
    return (
        <AnimatedPage>
            <div className='container w-[75%] flex flex-col m-auto my-6'>
                <h2 className='font-semibold text-2xl text-center'>Todos los productos</h2>
                <Search
                    value={inputSearch}
                    changeInput={(e) => setInputSearch(e.target.value)}
                />
                <div className="flex flex-col">
                    <Filter
                        selectedCategory={selectedCategory}
                        selectToggle={handleSelectCategory}
                    />
                    <div className='w-auto flex items-center justify-center'>
                        <ToggleButtonGroup className='bg-[#B3E8E5] ' exclusive>
                            <ToggleButton onClick={filtrarTodos} value="left" className='' >Ver todos</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <div className="h-col">
                    <List list={list} />
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Productos