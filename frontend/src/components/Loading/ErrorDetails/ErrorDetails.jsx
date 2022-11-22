import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorDetails = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => navigate("/"), 2000)
    })
    return (
        <div className=' w-full h-full text-green-500 flex justify-center items-center'>Has ingresado un producto que no existe</div>
    )
}

export default ErrorDetails