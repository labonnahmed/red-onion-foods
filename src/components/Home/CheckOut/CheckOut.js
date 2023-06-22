import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CheckOut.css'

const Checkout = () => {
    const authUser = JSON.parse(sessionStorage.getItem('authUser')) || null;
    const cart = JSON.parse(sessionStorage.getItem('cart')) || null;


    // cart calculation
    const totalQuentity = cart.reduce((total, item) => item.quentity + total, 0);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quentity, 0);

    const formatNumber = num => {
        const precison = num.toFixed(2);
        return Number(precison)
    };

    let tax;
    if (totalPrice < 99) {
        tax = 12.99;
    } else if (totalPrice < 334) {
        tax = 4.99
    } else {
        tax = 0
    };

    const grandTotal = totalPrice + tax + 12;

    // item display in cart


    const handlePlaceOrder = (e) => {
        const customarInfo = {
            Name: e.target[0].value,
            email: authUser.email,
            PhoneNumber: e.target[1].value,
            sector: e.target[2].value,
            flat: e.target[3].value,
        }

        fetch('http://localhost:8000/newOrder', {
            method: 'POST',
            body: JSON.stringify({
                itemDetails: cart,
                customarDetails: customarInfo
            }),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))



        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
        e.target[3].value = '';
        e.target[4].value = '';


        e.preventDefault();
    }

    return (
        <div className='grid lg:gap-8 md:grid-cols-2 w-10/12 mx-auto min-h-screen'>
            <div className='w-11/12 mx-auto'>
                <h6 className='text-2xl'>Edit Delivery Details</h6>
                <div className='hr' />
                <form action="" onSubmit={handlePlaceOrder} className='checkout'>
                    <input
                        type='text'
                        placeholder='Full Name'
                        className='mb-2'
                        defaultValue={authUser.displayName}
                        required />
                    <br />
                    <input
                        type='tel'
                        placeholder='Phone number'
                        className='mb-2'
                        required />
                    <br />
                    <input
                        type='text'
                        placeholder='Sector or Rd No'
                        className='mb-2'
                        required />
                    <br />
                    <input
                        type='text'
                        placeholder='Flat, suite or floor'
                        className='mb-2'
                        required />
                    <br />
                    <input
                        type='text'
                        placeholder='Add delivery Instruction'
                        className='mb-3'
                        required />
                    <br />
                    <button type="submit" className='w-full text-white opacity my-6 bg-primary hover:bg-hoverColor focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0'>Save & Continue</button>
                </form>
            </div>
            <div className='w-11/12 md:w-full  mx-auto'>
                <div className='mt-5'>
                    <h6 className='text-2xl'><span style={{ fontWeight: 400 }}>From</span> Gulshan Plaza Restuara GPR</h6>
                    <small>Arriving in 20-30 mins <br />
                        107 Rd No 8</small>
                </div>
                <section className='my-4'>
                    {
                        cart.map(item =>
                            <div className='flex mb-2 cart-product w-full' >
                                <img src={item.img} alt="" className='mr-2' />
                                <div className='pt-5'>
                                    <h6>{item.title}</h6>
                                    <h5 style={{ color: '#F91944' }}>${item.price}</h5>
                                </div>
                                <h6 className='ml-auto pt-5 pr-3'>Quentity: {item.quentity}</h6>
                            </div>
                        )
                    }
                </section>
                <section className=' space-y-2'>
                    <div className='flex justify-between'>
                        <small>Subtotal . {totalQuentity} item/s</small>
                        <small>${formatNumber(totalPrice)}</small>
                    </div>
                    <div className='flex justify-between'>
                        <small>Tax</small>
                        <small>${tax}</small>
                    </div>
                    <div className='flex justify-between'>
                        <small>Delivery fee</small>
                        <small>$12</small>
                    </div>
                    <div className='flex justify-between'>
                        <p><strong>Total</strong></p>
                        <small>${formatNumber(grandTotal)}</small>
                    </div>
                </section>
                <button className='text-white w-full opacity my-6 bg-primary hover:bg-hoverColor focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0'>Place Order</button>
            </div>
        </div>
    );
};

export default Checkout;