import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Store } from '../../Store';


const SigIn = () => {
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/users/signin', {
                email,
                password
            });
            ctxDispatch({ type: 'USER_SIGNIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate(redirect || '/')
            console.log(data);
        } catch (err) {
            alert('invalid email or password')
        }
    };

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo])
    return (
        <div className='w-[30%] flex mx-auto flex-col  items-center'>
            <h3 className='text-left w-full ml-2 my-8 text-xl'>Iniciar Sesion</h3>
            <form onSubmit={submitHandler} className='ml-0 w-full flex flex-col  '>
                <div className='flex flex-col'>
                    <label className='mx-4'>Email</label>
                    <input type="email" required onChange={(e) => setEmail(e.target.value)} className='my-3 rounded-2xl border-2 border-gray-200 p-1 px-3' />
                </div>
                <div className='flex flex-col'>
                    <label className='mx-4'>Password</label>
                    <input type="password" required onChange={(e) => setPassword(e.target.value)} className='my-3 rounded-2xl border-2 border-gray-200 p-1 px-3' />
                </div>
                <div className="mb-3 text-center my-3">
                    <button type="submit" className='bg-[#00bcd4] p-4 rounded-2xl w-[50%] text-white hover:bg-[#0097a7] trasition-all duration-300 ease-in'>Iniciar Sesion</button>
                </div>
                <div className="mb-3 my-3 text-center">
                    No tienes una cuenta?{' '}
                    <Link to={`/signup?redirect=${redirect}`} className='underline text-blue-400 hover:text-blue-500 trasition-all duration-300 ease-in'>Registrate aqui</Link>
                </div>
            </form>
        </div>
    )
}

export default SigIn