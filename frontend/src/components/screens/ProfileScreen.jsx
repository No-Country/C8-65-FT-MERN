import axios from 'axios';
import React, { useContext, useReducer, useState } from 'react'
import { toast } from 'react-toastify';
import { Store } from '../../Store';
import AnimatedPage from '../AnimatedPage/AnimatedPage';
const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_REQUEST':
            return { ...state, loadingUpdate: true };
        case 'UPDATE_SUCCESS':
            return { ...state, loadingUpdate: false };
        case 'UPDATE_FAIL':
            return { ...state, loadingUpdate: false };

        default:
            return state;
    }
};
const ProfileScreen = () => {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;
    const [name, setName] = useState(userInfo.name);
    const [email, setEmail] = useState(userInfo.email);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
        loadingUpdate: false,
    });

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(
                '/api/users/profile',
                {
                    name,
                    email,
                    password,
                },
                {
                    headers: { Authorization: `Bearer ${userInfo.token}` },
                }
            );
            dispatch({
                type: 'UPDATE_SUCCESS',
            });
            ctxDispatch({ type: 'USER_SIGNIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            toast.success('User updated successfully');
        } catch (err) {
            dispatch({
                type: 'FETCH_FAIL',
            });
            toast.error('Error')
        }
    };
    return (
        <AnimatedPage>
            <div className="w-[30%] flex mx-auto flex-col  items-center">
                <h1 className="my-3">Mi Perfil</h1>
                <form onSubmit={submitHandler} className='ml-0 w-full flex flex-col'>
                    <div className="flex flex-col" >
                        <label className='mx-4'>Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className='my-3 rounded-2xl border-2 border-gray-200 p-1 px-3'
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='my-3 rounded-2xl border-2 border-gray-200 p-1 px-3'
                        />
                    </div>
                    <div className="flex flex-col" >
                        <label>Password</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className='my-3 rounded-2xl border-2 border-gray-200 p-1 px-3'
                        />
                    </div>
                    <div className="flex flex-col" >
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className='my-3 rounded-2xl border-2 border-gray-200 p-1 px-3'
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <button type="submit" className='bg-[#00bcd4] p-4 rounded-2xl w-[50%] text-white hover:bg-[#0097a7] trasition-all duration-300 ease-in '>Actualizar</button>
                    </div>
                </form>
            </div>
        </AnimatedPage>
    )
}

export default ProfileScreen