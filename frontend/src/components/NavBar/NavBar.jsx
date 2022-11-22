import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineMenu, AiOutlineClose, AiOutlinePhone } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import { BsPerson } from 'react-icons/bs'
import { Store } from '../../Store'
import { MenuItems } from './MenuItems'

const NavBar = () => {


    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;

    const signoutHandler = () => {
        ctxDispatch({ type: 'USER_SIGNOUT' });
        localStorage.removeItem('userInfo');
        localStorage.removeItem('shippingAddress');
    }
    console.log(userInfo);


    const [open, setOpen] = useState(true)

    const [active, setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

    return (
        <IconContext.Provider value={{ color: '#2ca289' }}>
            <nav className=' shadow-md w-full sticky top-0 left-0 h-auto'>
                <div className='flex md:justify-between justify-around  bg-white py-2 md:px-10 px-7'>
                    <div className='absolute left-6 md:hidden top-6 scale-150'>
                        <AiOutlineMenu onClick={showMenu} className='scale-150 cursor-pointer' />
                    </div>
                    <Link to='/'>
                        <div className='flex flex-row w-auto'>
                            <img className='object-contain h-10 w-10 m-2' src='./img/pills.png' alt="" />
                            <div className='flex flex-col '>
                                <h2 className=' text-ms cursor-pointer  text-black text-center font-bold '>Pharmacy</h2>
                                <p className='text-center font-bold text-[#0097a7]'>Medicamentos</p>
                            </div>

                        </div>
                    </Link>

                    <ul className='flex items-center md:static bg-white left-0 w-auto md:w-auto pl-0 pl-9 trasition-all duration-500 ease-in    '>
                        <li className='md:ml-8  no-underline md:my-0 my-7 ml-auto'></li>
                        <Link to='/' className='mx-3'><AiOutlineHeart className='h-7 w-7' /></Link>
                        <li className='md:ml-8  no-underline md:my-0 my-7'></li>
                        <Link to='/' className='mx-3'><BsPerson className='h-7 w-7 ' /></Link>
                        <li className='md:ml-8  no-underline md:my-0 my-7 block align-middle'></li>
                        <Link to='/cart' className='relative flex mx-3 '>
                            <AiOutlineShoppingCart className='flex-1  fill-current h-7 w-7 ' />
                            <span className='"absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center' pill>{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</span>
                        </Link>
                        <li className='md:ml-8  no-underline md:my-0 my-7'></li>
                        <Link to='/' className='mx-3'><AiOutlinePhone className='h-7 w-7' /></Link>
                    </ul>
                </div>
                <ul className='hidden md:flex gap-8 p-6 uppercase bg-[#00ACC1] justify-around text-white'>
                    <li className='flex flew-row'><Link to='/' className='mx-3'><img src='./img/categorias.png' className='h-7 w-7' /></Link>Categorias</li>
                    <li className='flex flew-row'><Link to='/' className='mx-3'><img src='./img/dolor_de_garganta.png' className='h-7 w-7' /></Link>Dolor de garganta</li>
                    <li className='flex flew-row'><Link to='/' className='mx-3'><img src='./img/dolor_de_muelas.png' className='h-7 w-7' /></Link>Dolor de muelas</li>
                    <li className='flex flew-row'><Link to='/' className='mx-3'><img src='./img/dolor_de_cabeza.png' className='h-7 w-7' /></Link>Dolor de cabeza</li>
                </ul>
                <MenuItems showMenu={showMenu} active={active} />
            </nav>
        </IconContext.Provider>

    )
}

export default NavBar