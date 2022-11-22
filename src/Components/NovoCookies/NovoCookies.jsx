import React from 'react';
import { useCookies } from 'react-cookie';

export default function Cookies(){
    const [cookies, setCookie] = useCookies(['user']);

    function handleCookie(){
        setCookie('user', 'benjo', {
            path: '/'
        });
    }
    return(
        <div className='CookieDiv'>
            <h1>React cookies</h1>
            <button onClick={handleCookie}>Set Cookie</button>
        </div>
    );
}