import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

export const MenuItems = ({ showMenu, active }) => {
    return (
        <ul className={active ? ' pioridad flex-col flex items-center fixed inset-0 right-1/4 uppercase bg-white/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
            <AiOutlineClose onClick={showMenu} className='cursor-pointer' />
            <li className='flex flew-row'><Link to='/products' className='mx-3'><img src='https://res.cloudinary.com/dbovldjfc/image/upload/v1670213551/farmacia/categorias_y4evcd.png' className='h-7 w-7' /></Link>Productos</li>
            <li className='flex flew-row'><Link to='/' className='mx-3'><img src='https://res.cloudinary.com/dbovldjfc/image/upload/v1670213552/farmacia/dolor_de_garganta_dcgcpj.png' className='h-7 w-7' /></Link>Dolor de garganta</li>
            <li className='flex flew-row'><Link to='/' className='mx-3'><img src='https://res.cloudinary.com/dbovldjfc/image/upload/v1670213551/farmacia/dolor_de_muelas_v2x08y.png' className='h-7 w-7' /></Link>Dolor de muelas</li>
            <li className='flex flew-row'><Link to='/' className='mx-3'><img src='https://res.cloudinary.com/dbovldjfc/image/upload/v1670213551/farmacia/dolor_de_cabeza_tjdjjl.png' className='h-7 w-7' /></Link>Dolor de cabeza</li>
        </ul>
    )
}

