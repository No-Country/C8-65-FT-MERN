import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineMenu, AiOutlineClose, AiOutlinePhone } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import { BsPerson } from 'react-icons/bs'

const NavBar = () => {





    const [open, setOpen] = useState(true)

    return (
        <IconContext.Provider value={{ color: '#2ca289', size: '2em' }}>
            <nav className='shadow-md w-full sticky top-0 left-0'>
                <div className='flex items-center justify-between  bg-white py-2 md:px-10 px-7'>
                    <Link to='/'>
                        <div className='flex flex-row w-auto'>
                            <div className='flex flex-col my-auto'>
                                <h2 className=' text-xl cursor-pointer flex items-center '>Pharmacy Medical</h2>
                                <p className='text-center'>Tienda de farmacia</p>
                            </div>
                            {/* <img className='object-contain h-20 w-20 m-4' src={logo} alt="" /> */}
                        </div>
                    </Link>
                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 trasition-all duration-500 ease-in ${open ? 'top-26' : 'top-[-490px]'}`}>
                        <li className='md:ml-8  no-underline md:my-0 my-7 ml-auto'></li>
                        <Link to='/'><AiOutlineHeart /></Link>
                        <li className='md:ml-8  no-underline md:my-0 my-7'></li>
                        <Link to='/'><BsPerson /></Link>
                        <li className='md:ml-8  no-underline md:my-0 my-7'></li>
                        <Link to='/'><AiOutlineShoppingCart /></Link>
                        <li className='md:ml-8  no-underline md:my-0 my-7'></li>
                        <Link to='/'><AiOutlinePhone /></Link>
                    </ul>
                </div>
            </nav>
        </IconContext.Provider>

    )
}

export default NavBar