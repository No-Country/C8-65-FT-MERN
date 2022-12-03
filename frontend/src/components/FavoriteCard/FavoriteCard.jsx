import React, { useState } from 'react'
import AnimatedPage from '../AnimatedPage/AnimatedPage'
import { AiOutlineHeart } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
const FavoriteCard = ({ data }) => {
    console.log(data)
    const obj = {
        title: "Narueoasdaasdsaddas",
        price: "asd",
        isFavorite: false,
    }
    const [FavProduct, setFav] = useState(obj.isFavorite)
    return (
        <div className='flex justify-between items-center bg-white border-solid border-2 border-gray-300 min-w-[20rem] min-h-[6rem] gap-2 px-2 rounded-lg '>
            <div className='bg-black min-w-[4rem] min-h-[4rem]' ></div>
            <h2 className='text-black text-[1.2rem]'>{obj.title}</h2>
            <button className="" onClick={() => setFav(!FavProduct)}>{FavProduct ? <FcLike className='h-7 w-7' /> : <AiOutlineHeart className='h-7 w-7' />}</button>
        </div>
    )
}

export default FavoriteCard