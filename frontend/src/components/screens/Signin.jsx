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
            console.log(userInfo);
        }
    }, [navigate, redirect, userInfo])
    return (
        <>
            <h1>Signin</h1>
            <form onSubmit={submitHandler}>
                <label>Email</label>
                <input type="email" required onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" required onChange={(e) => setPassword(e.target.value)} />
                <div className="mb-3">
                    <button type="submit">Sign In</button>
                </div>
                <div className="mb-3">
                    New customer?
                    <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
                </div>
            </form>
        </>
    )
}

export default SigIn