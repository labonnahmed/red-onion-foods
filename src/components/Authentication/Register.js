import React, { useState } from 'react';
import { createUserWithEmailAndPassword  } from "firebase/auth";
import auth from './firebase';
import './Authentication.css';

const Register = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const isFieldValid = (e) => {
        let fieldValid;
        const regexForEmail= /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
        var regexForPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if(e.target.name === 'email'){
            fieldValid = regexForEmail.test(e.target.value);
        }
        if(e.target.name === 'password') {
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
        createUserWithEmailAndPassword(auth, email, password)
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
                type='text' 
                name='name'
                placeholder='Name'
                className='mb-2'
                required 
                    onBlur={isFieldValid} />
            <br />
            <input 
                type='email' 
                name='email'
                placeholder='Email'
                className='mb-2'
                required 
                    onBlur={isFieldValid} />
            <br />
            <input 
                type='password' 
                name='password'
                placeholder='Password'
                className='mb-2'
                required 
                    onBlur={isFieldValid} />
            <br />
            <input 
                type='password' 
                name='password'
                placeholder='Confirm Password'
                className='mb-2'
                required 
                    onBlur={isFieldValid} 
            />
            <br />
            <input type="submit"  value='Register' className='submit m-2'/>
        </form>
    );
};

export default Register;