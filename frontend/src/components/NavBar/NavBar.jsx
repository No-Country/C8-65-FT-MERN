import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlinePhone, AiOutlineShop, AiOutlineHome } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

import { Store } from '../../Store'

import { DropDown } from './DropDown'

const NavBar = () => {


    const { state } = useContext(Store);
    const { cart } = state;









    return (
        <IconContext.Provider value={{ color: '#2ca289' }}>
            <nav className=' shadow-md w-full top-0 left-0 w-[100%]' style={{ 'zIndex': 999 }} >
                <div className='flex md:justify-between justify-around  bg-white py-2 md:px-10 px-7 w-full'>
                    <Link to='/' className='flex justify-center items-center sm:flex hidden'>
                        <div className=' flex-row w-auto h-full m-auto md:flex hidden'>
                            <img className=' h-10 w-10 m-auto mr-3 ' src='https://res.cloudinary.com/dbovldjfc/image/upload/v1669327355/farmacia/pills_llhrbs.png' alt="" />
                            <div className='flex flex-col items-center justify-center invisible md:visible'>
                                <h2 className=' md:text-ms text-xs cursor-pointer  text-black text-center font-bold '>Pharmacy</h2>
                                <p className='text-center font-bold text-[#0097a7] md:text-ms text-xs'>Medicamentos</p>
                            </div>

                        </div>
                    </Link>


                    <ul className='flex items-center md:static bg-white left-0  md:w-auto pl-0 sm:pl-9 trasition-all duration-500 ease-in gap-x-3 w-full'>
                        <li className='md:ml-8  no-underline md:my-0 my-7 ml-auto visible md:invisible'><Link to='/products' className='mx-3'><AiOutlineHome className='h-7 w-7' /></Link></li>
                        <li className='md:ml-8  no-underline md:my-0 my-7 ml-auto'><Link to='/products' className=''><AiOutlineShop className='flex-1 h-7 w-7' /></Link></li>


                        <li className='md:ml-8  no-underline md:my-0 my-7 ml-auto'><Link to='/favorite' className='relative flex'>
                            <AiOutlineHeart className=' flex-1 fill-current h-7 w-7' />
                            {state.favorite.length > 0 && <span className='"absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center'>{state.favorite.length}</span>}
                        </Link></li>


                        <li className='md:ml-8  no-underline md:my-0 my-7'><DropDown /></li>

                        <li className='md:ml-8  no-underline md:my-0 my-7 block align-middle ml-auto'><Link to='/cart' className='relative flex  '>
                            <AiOutlineShoppingCart className='flex-1   h-7 w-7 ' />
                            {cart.cartItems.length > 0 && <span className='"absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center'>{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</span>}
                        </Link></li>

                        <li className='md:ml-8  no-underline md:my-0 my-7 ml-auto'><Link to='/contact' className='mx-3'><AiOutlinePhone className='h-7 w-7' /></Link></li>
                        {/* <li className='md:ml-8  no-underline md:my-0 my-7'><Link to='/contact' className='mx-3'><AiOutlinePhone className='h-7 w-7' /></Link></li> */}

                    </ul>
                </div>


            </nav>
        </IconContext.Provider>

    )
}

export default NavBar