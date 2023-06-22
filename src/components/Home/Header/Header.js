import React from 'react';
import './Header.css'
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className='relative HeaderMain-container'>
            <Navbar />
            <div className='w-full tracking-widest text-gray-800 absolute md:top-1/3 top-1/2'>
                <div className=' my-auto px-4 text-gray-800 text-center flex flex-col place-items-center'>
                    <h1 className='text-4xl leading-snug font-extrabold mb-4'>Best food waiting for your belly</h1>
                    <form className='w-96'>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <input type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search food items" required />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-hoverColor focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;