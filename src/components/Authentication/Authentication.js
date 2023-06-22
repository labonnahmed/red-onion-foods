import React, { useEffect, useState } from 'react';
import './Authentication.css'
import Login from './Login';
import Resigter from './Register';
import auth from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import logo from '../../images/icons/logo.png';
import formBG from '../../images/icons/image-removebg-preview.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Authentication = () => {
  const [newUser, setNewUser] = useState(false);
  const authUser = JSON.parse(sessionStorage.getItem('authUser')) || null;

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        alert('successfully login')
        sessionStorage.setItem('authUser', JSON.stringify(user));


        navigate(from, { replace: true })
      }
      else {
        sessionStorage.setItem('authUser', JSON.stringify(null));
      }
    });
    return () => {
      listen();
    }
  }, []);

  return (
    <div className='authentication text-center banner p-0 mt-5'>
      <Link to='/'>
        <img src={formBG} alt="Form background" className='h-screen' />
      </Link>
      <div className='form'>
        <Link to='/'>
          <img src={logo} alt="" className='h-20 p-2 mb-4' />
        </Link>
        <div>
          {newUser ? <Resigter /> : <Login />}
          <small
            onClick={() => setNewUser(!newUser)}
          >
            {newUser ? "Already have an account?" : "Create an new account?"}
          </small>
          {
            authUser && <p style={{ color: 'black' }}>user logged in as:{authUser.email}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Authentication;