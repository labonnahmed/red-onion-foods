import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const FoodContainer = () => {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || null;

    return (
        <div className='my-20 flex flex-col'>
            <nav className='flex justify-center gap-6 font-semibold text-lg text-gray-700 mb-10'>
                <NavLink to='/breakfast'>Breakfast</NavLink>
                <NavLink to='/'>Lunch</NavLink>
                <NavLink to='/dinner'>Dinner</NavLink>
            </nav>
            <div>
                <Outlet />
            </div>
            <Link to='/checkOut' className='place-self-center'>
                <button type="button" className='text-white opacity my-6 bg-primary hover:bg-hoverColor focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0'
                    disabled={!cart && true}>
                    Checkout Your Food
                </button>
            </Link>
        </div>
    );
};

export default FoodContainer;