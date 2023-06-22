import React from 'react';
import { useParams } from 'react-router-dom';
import './FoodDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import breakfast from '../HomeData/breakfast.json';
import lunch from '../HomeData/lunch.json';
import dinner from '../HomeData/dinner.json';

const FoodDetails = () => {
    const { title } = useParams();
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    const foodItems = [...breakfast, ...lunch, ...dinner];
    const foodItem = foodItems.find(i => i.title === title);

    let quentity = 1;

    const handleIncrement = () => {
        quentity < 10 && quentity++;
        document.getElementById('displayQuentity').value = quentity;
        document.getElementById('price').value = quentity * foodItem.price;
    };
    const handleDecrement = () => {
        quentity > 1 && quentity--;
        document.getElementById('displayQuentity').value = quentity;
        document.getElementById('price').value = quentity * foodItem.price;
    };


    const handleAddItem = (foodItem) => {
        foodItem.quentity = quentity;
        foodItem._id = Math.random()*10000000.

        cart.push(foodItem);
        sessionStorage.setItem('cart', JSON.stringify(cart));
    };


    return (
        <div className='grid md:grid-cols-2 max-md:flex flex-col-reverse p-5 w-10/12 mx-auto'>
            <div className='md:my-20 mb-10'>
                <h1 className='mb-4 text-4xl'>{foodItem.title}</h1>
                <small className='text-gray-700 pr-2'>{foodItem.longDescription}</small>
                <div className='flex my-2'>
                    <div className='text-2xl text-gray-800 mt-4'>
                        $ <input inputMode='numeric' className='placeholder:text-2xl placeholder:text-gray-800 w-20' style={{ backgroundColor: "white", fontSize: "bold" }} id='price' placeholder={foodItem.price} />
                    </div>
                    <div className='my-3 mx-4'>
                        <form className='flex'>
                            <div className="value-button decrement" onClick={handleDecrement}><FontAwesomeIcon icon={faMinus} className='value-icon' /></div>
                            <input inputMode='numeric' className="quentity " placeholder='1' id='displayQuentity' style={{ backgroundColor: 'white' }} />
                            <div className="value-button increment" onClick={handleIncrement}><FontAwesomeIcon icon={faPlus} className='value-icon' /></div>
                        </form>
                    </div>
                </div>
                <button className='text-white bg-primary hover:bg-[#e94c6b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0'
                    onClick={() => handleAddItem(foodItem)}
                >
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        style={{ marginRight: '10px' }}
                    />
                    Add to Cart
                </button>
            </div>
            <img src={foodItem.img} alt="" className='p-6' />
        </div>
    );
};

export default FoodDetails;