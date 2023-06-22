import React, { useState } from 'react';
import logo from '../../../images/icons/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isToggle, setIsToggole] = useState(false)
    return (
        <nav className="z-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <img src={logo} className="h-12 mr-3" alt="Red Onion Logo" />
                </Link>
                <button onClick={() => setIsToggole(!isToggle)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className={`w-full md:block md:w-auto  ${isToggle ? "block" : "hidden"}`} id="navbar-default">
                    <ul className="font-medium float-right max-md:bg-primary flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className='mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6  max-md:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </li>
                        <li className='mt-1'>
                            <a href="/login" className="block  max-md:text-white py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 md:dark:text-blue-500" aria-current="page">Login</a>
                        </li>
                        <li>
                            <button type="button" className="text-white bg-primary hover:bg-[#e94c6b] focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">sign out</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;