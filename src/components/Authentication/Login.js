import React, { useState } from 'react';
import { signInWithEmailAndPassword  } from "firebase/auth";
import auth from './firebase';
import './Authentication.css'

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const isFieldValid = (e) => {
        let fieldValid;
        const regexForEmail= /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
        var regexForPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if(e.target.name === 'email'){
            fieldValid = regexForEmail.test(e.target.value);
        }
        if(e.target.name === 'password'){
            fieldValid = regexForPassword.test(e.target.value);
        }
        if(fieldValid){
            if(e.target.name === 'email'){
                setEmail(e.target.value);
            }
            if(e.target.name === 'password'){
                setPassword(e.target.value);
            }
        }
    }

    const handleSubmit = (e) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('successfully Login');
        })
        .catch((error) => {
            alert(error);
        });
        console.log(email, password)
        e.preventDefault();
    };

    return ( 
        <form action="" onSubmit={handleSubmit} className='authentication'>
            <input 
                type='email' 
                name='email'
                placeholder='Email' 
                required 
                    onBlur={isFieldValid} />
            <br />
            <input 
                type='password' 
                name='password'
                placeholder='Password'
                className='m-2'
                required 
                    onBlur={isFieldValid} 
            />
            <br />
            <input type="submit"  value='Login' className='submit m-2'/>
        </form>
    );
};

export default Login;