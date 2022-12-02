import React, { useContext, useState } from "react";
import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { BsPerson } from 'react-icons/bs'
import { Store } from "../../Store";
import { Link } from "react-router-dom";

export const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;

    const signoutHandler = () => {
        ctxDispatch({ type: 'USER_SIGNOUT' });
        localStorage.removeItem('userInfo');
        localStorage.removeItem('shippingAddress');
    }

    console.log(userInfo);
    return (
        <div className="  flex justify-end p-4">
            <Menu as="div" className="relative">
                <Menu.Button className="inline-flex justify-center w-full  px-4 py-2 bg-white text-sm font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    <BsPerson className="h-7 w-7" />
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                    {userInfo ? (
                        <div className="py-1">
                            <Menu.Item>
                                <span className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover_text-white">
                                    Bienvenido! {userInfo.name}</span>
                            </Menu.Item>

                            <Menu.Item>
                                <Link to='/orderhistory' className='group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover_text-white' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                    <img className='w-6 h-6 mr-3' src='./img/clipboard.png' alt="" />
                                    Historial de ordenes</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/profile' className='group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover_text-white' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                    <img className='w-6 h-6 mr-3' src='./img/perfil.png' alt="" />
                                    Perfil</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link className='group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover_text-white' to='#signout' onClick={signoutHandler} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                    Sign Out</Link>
                            </Menu.Item>
                        </div>
                    ) : (
                        <Link className='group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover_text-white' to="/signin">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                            </svg>

                            Sign In
                        </Link>
                    )}




                </Menu.Items>
            </Menu>
        </div>
    )
} 