import React, { useEffect, useState } from 'react'
import './filter.css'


import axios from 'axios'
import MainCategory from '../MainCategory/MainCategory';

const Filter = ({ selectedCategory, selectToggle }) => {

    const [categoryList, setCategoryList] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/category');

            setCategoryList(result.data);

        }
        fetchData();
    }, []);

    return (
        <div className='f-container'>
            <div className="filter-group">
                <MainCategory options={categoryList} value={selectedCategory} selectToggle={selectToggle} />
            </div>
        </div>
    )
}

export default Filter
