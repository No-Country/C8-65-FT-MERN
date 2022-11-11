import React, { useState } from 'react'


const NavBar = () => {
    const [color, setcolor] = useState(true)
    const [palabra, setpalabra] = useState('hola')

    const cambiarColor = () => {
        setcolor(!color)
        setpalabra('chau')
    }

    const palabraFuncion = () => {
        setpalabra('hola')
    }

    return (
        <nav>
            <div className={color ? 'bg-red-700' : 'bg-blue-400'}>NavBar</div>
            <button onClick={cambiarColor} className='bg-amber-300'>cambio</button>
            <h2 className='text-red-600'>{palabra}</h2>
            <button onClick={palabraFuncion}>cambiar a chau</button>
            <h1 className='bg-red-500'>hola</h1>
        </nav>
    )
}

export default NavBar