
import React, { useContext } from 'react'

import { IconContext } from 'react-icons/lib'
import { Store } from '../../Store'
import { Link } from 'react-router-dom'
import FavoriteCard from '../FavoriteCard/FavoriteCard'
import { AiFillHome } from 'react-icons/ai'
import AnimatedPage from '../AnimatedPage/AnimatedPage'

const Favorite = () => {
    const { state } = useContext(Store)
    return (
        <AnimatedPage>
            <IconContext.Provider value={{ color: '#2ca289' }}>
                <section className='favorite'>
                    <article className="w-full px-4 " >
                        <h2 className='font-semibold text-xl md:text-2xl py-6 font-Montserrat'>Tus productos favoritos:</h2>
                        <div className='flex justify-center md:justify-start flex-wrap gap-3'>
                            {state?.favorite && state?.favorite.map(data => <FavoriteCard key={data.name} data={data} />)}
                            {state.favorite.length === 0 &&
                                <div className='flex justify-center items-center flex-col w-full gap-2'>
                                    <h3 className='font-semibold text-[1.1rem]'>No tienes favoritos...</h3>
                                    <Link to={'/'} className=' flex justify-center items-center gap-1 bg-celeste rounded-lg py-2 w-[10rem] text-white' >Ver a agregarlos <AiFillHome style={{ color: 'white' }} /></Link>
                                </div>
                            }
                        </div>

                    </article>
                </section>
            </IconContext.Provider>
        </AnimatedPage>
    )
}

export default Favorite