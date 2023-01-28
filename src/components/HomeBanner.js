import React, { useState } from 'react'
import Search from './Search'
import SearchBar from './SearchBar'
import AppCard from './HomeCard'
import { Input } from 'antd';
//const { Search } = Input;

import Image from '../assets/img/rent_house_73089751-5bfc333346e0fb002602ddbe.jpg';

const HomeBanner = () => {
    const [filters, setFilters] = useState({ city: '', price: '' });

    const changeFilters = (city, price) => {
        setFilters({ city: city, price: price });
    }
    const onSearch = (value) => console.log(value);

    return (

        <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
             <SearchBar/>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                    <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
                        <span className='text-red-700'>Find & Rent </span>your bodim place from us
                    </h1>
                    <p className='max-w-[480px] mb-8'>
                        InstantStays is a Web Application. It is useful to find and host bordim places.
                        Hosts can market their bordim places. Users can see photos, find and book bordim places
                        according to location and price. Shows user feedback and reviews.
                    </p>
                </div>
                <div className='hidden flex-1 lg:flex justify-end items-end'>
                    <img src={Image} alt='' />
                </div>
            </div>

            <Search changeFilters={changeFilters} />
            <AppCard filters={filters} />
        </section>
    )
};

export default HomeBanner;