import axios from 'axios'
import React, { useState } from 'react'

import { IconContext } from 'react-icons/lib'
import FavoriteCard from '../FavoriteCard/FavoriteCard'

const Favorite = () => {

    return (
        // <AnimatedPage>
        // </AnimatedPage>
        <IconContext.Provider value={{ color: '#2ca289' }}>
            <section className=''>
                <article className="w-full px-4" >
                    <h2 className='font-semibold text-xl md:text-2xl py-6'>Tus productos favoritos:</h2>
                    <div className='flex justify-center md:justify-start flex-wrap gap-3'>
                        {/* {data && data.map(pro => <FavoriteCard />)} */}
                        <FavoriteCard />
                    </div>

                </article>
            </section>
        </IconContext.Provider>
    )
}

export default Favorite