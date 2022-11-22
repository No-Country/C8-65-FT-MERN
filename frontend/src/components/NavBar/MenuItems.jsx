import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

export const MenuItems = ({ showMenu, active }) => {
    return (
        <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-white/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
            <AiOutlineClose onClick={showMenu} className='cursor-pointer' />
            <li className='flex flew-row'><Link to='/' className='mx-3'><img src='./img/categorias.png' className='h-7 w-7' /></Link>Categorias</li>
            <li className='flex flew-row'><Link to='/' className='mx-3'><img src='./img/dolor_de_garganta.png' className='h-7 w-7' /></Link>Dolor de garganta</li>
            <li className='flex flew-row'><Link to='/' className='mx-3'><img src='./img/dolor_de_muelas.png' className='h-7 w-7' /></Link>Dolor de muelas</li>
            <li className='flex flew-row'><Link to='/' className='mx-3'><img src='./img/dolor_de_cabeza.png' className='h-7 w-7' /></Link>Dolor de cabeza</li>
        </ul>
    )
}

