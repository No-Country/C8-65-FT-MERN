import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import { useContext } from 'react'
import { Store } from '../../Store'
import { useNavigate } from 'react-router-dom'
const FavoriteCard = ({ data }) => {
    const { dispatch } = useContext(Store)
    const { name, image, isFavorite, slug } = data
    const [FavProduct, setFav] = useState(isFavorite || false)
    const navigate = useNavigate();
    return (
        <div className='flex justify-between items-center font-poppins bg-white border-solid border-2 border-gray-300 min-w-[20rem] min-h-[6rem] gap-2 px-2 rounded-lg '>
            <img src={image} alt={name} className='w-[4rem] h-[4rem] object-cover' />
            <div className='flex flex-col items-center'>
                <h2 className='text-black text-[1.2rem]'>{name}</h2>
                <h3 onClick={() => navigate(`/product/${slug}`)} className='text-celeste cursor-pointer'>Ver producto</h3>

            </div>

            <button className="" onClick={() => dispatch({ type: 'DELETE_TO_FAVORITE', payload: data })}>{FavProduct ? <FcLike className='h-7 w-7' /> : <AiOutlineHeart className='h-7 w-7' />}</button>
        </div >
    )
}

export default FavoriteCard