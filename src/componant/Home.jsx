import React from 'react';
import Slider from './Slider';
import CardHomeInfo from './CardHomeInfo';

const Home = () => {
    return (
        
        <div>
            <div className='flex items-center gap-5 my-5'>
            <div className='w-[50%]'>
                <h1 className='text-5xl font-semibold text-blue-700 mb-4'>Find the best college <br /> In town for you</h1>

                <p className='text-xl w-[90%] text-black'>Education is the key to a better future. It opens up opportunities, improves our lives, and makes the world a better place. Educated people are more likely to be employed, earn higher wages, and live longer, healthier lives. They are also more likely to be involved in their communities and make positive contributions to society.</p>
            </div>

            <div className='w-[50%] overflow-hidden'>
                <img className='rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover' src="https://www.companysetup.ae/wp-content/uploads/2022/04/set-up-education-institution-in-dubai.jpeg" alt="" />
            </div>
        </div>

        <Slider></Slider>
        <CardHomeInfo></CardHomeInfo>
        </div>
    );
};

export default Home;