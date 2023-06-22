import React from 'react';
import service from '../HomeData/service.json'
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <div className='w-10/12 mx-auto my-20'>
            <div className='md:w-1/2'>
                <h3 className='text-3xl my-5'>Why you choose us</h3>
                <p><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat veniam possimus nobis, accusamus quae temporibus explicabo!</small></p>
            </div>
            <div className='grid md:grid-cols-3 mx-auto gap-4 my-10'>
                {
                    service.map(s =>
                        <div key={s.id} className=''>
                            <img className='' src={s.img} alt={s.title} />
                            <div className='flex gap-4 mt-6'>
                                <img src={s.logo} className='h-10' alt='logo' />
                                <div>
                                    <h4 className='text-gray-700 font-semibold'>{s.title}</h4>
                                    <p><small>{s.description}</small></p>
                                    <Link to='about_us' className='text-primary'>see more <img src={s.icon} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Service;