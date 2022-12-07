import React, { useContext } from 'react'
import { AiOutlineFacebook, AiOutlineForm, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { Store } from '../../Store';
const Footer2 = () => {

  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
  } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
  }
  return (
    <footer className='p-4 bg-celeste_oscuro sm:p-6 my-6'>
      <div className='md:flex md:justify-between lg:px-16 px-0'>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6 lg:grid-cols-4 w-full">
          <div>
            <Link to='/products'>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Productos</h2>
            </Link>
            <ul class="text-white">
              <li >
                <span >Dolor de panza</span>
              </li>
              <li className='my-4'>
                <span >Dolor de cabeza</span>
              </li>
              <li>
                <span >Dolor de garganta</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Perfil</h2>
            {userInfo ? (<ul class="text-white">
              <li >
                <Link to='/orderhistory'><span>Historial de ordenes</span></Link>
              </li>
              <li className='my-4'>
                <Link to='/profile' >
                  <span>Editar Perfil</span>
                </Link>
              </li>
              <li >
                <li to='/profile'>

                  <button onClick={signoutHandler}>Desconectar</button>
                </li>
              </li>
            </ul>) : (
              <ul class="text-white">
                <li >
                  <Link to='/signin'><span>Iniciar Sesion</span></Link>
                </li>
              </ul>
            )}
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase ml-4 ">Contacto</h2>
            <ul class="text-white">
              <li className='flex flex-row'>
                <AiOutlineForm className='my-auto mx-2' />
                <Link to='/contact'>
                  <span>Formulario</span>
                </Link>
              </li>
              <li className='flex flex-row my-4'>
                <AiOutlinePhone className='my-auto mx-2' />
                <span>+999 9 9999</span>
              </li>
              <li className='flex flex-row'>
                <AiOutlineMail className='my-auto mx-2' />
                <span>pharmacy@medicamentos.com</span>
              </li>
            </ul>
          </div>
          <div className='w-auto'>
            <h2 class="mb-3 text-sm font-semibold text-white uppercase ml-4 ">Seguinos en nuestras redes</h2>
            <ul class="text-white flex flex-row ml-4 ">
              <li>
                <AiOutlineInstagram className='h-[30px] w-[30px]' />
              </li>
              <li>
                <AiOutlineFacebook className='h-[30px] w-[30px]' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer2