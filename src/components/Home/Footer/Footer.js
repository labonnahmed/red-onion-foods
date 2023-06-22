import React from 'react';
import logo from '../../../images/icons/logo02.png'

const Footer = () => {
    return (
        <div className='bg-gray-900 text-gray-400 text-sm p-6 min-h-fit'>
            <div className="grid grid-cols-7 gap-4 mt-6">
                <img src={logo} alt="red onion logo" className='h-12 col-span-2' />
                <ul className='col-span-3 space-y-2 place-self-end'>
                    <li>About Online food</li>
                    <li>Read our Blog</li>
                    <li>Sign up to deliver</li>
                    <li>Add your restaurant</li>
                </ul>
                <ul className='col-span-2 space-y-2 place-self-center'>
                    <li>get help</li>
                    <li>Read FAQs</li>
                    <li>View all cities</li>
                    <li>Restaurants</li>
                </ul>
            </div>
            <div className='flex max-md:flex-col-reverse max-md:place-items-center gap-4 justify-between mt-32 mb-5 px-6'>
                <small>Copyright @ 2023 Onion food</small>
                <ul className='flex gap-6'>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Pricing</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;