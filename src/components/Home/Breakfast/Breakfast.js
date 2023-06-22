import React from 'react';
import { Link } from 'react-router-dom';
import breakfastItems from '../HomeData/breakfast.json';

const Breakfast = () => {
    return (
        <div className='grid md:grid-cols-3 max-md:grid-cols-2 gap-4 mx-auto w-10/12 text-center mt-4'>
            {
                breakfastItems.map(item =>
                    <Link to={`/breakfast/${item.title}`}>
                        <div key={item.id} className="w-full max-w-sm dark:bg-gray-800 dark:border-gray-700 md:px-6 px-2">
                            <div className="flex flex-col items-center pb-10">
                                <img className="h-40" src={item.img} alt="Bonnie" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.title}</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{item.description}</span>
                                <h3>{item.price}</h3>
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
    );
};

export default Breakfast;