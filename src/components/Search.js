import React, { useState } from 'react'
import CityDropdown from './CityDropdown'
import CategoryDropdown from './CategoryDropdown'
import PriceDropdown from './PriceDropdown'


const Search = ({ changeFilters }) => {
    const [cityFilter, setCityFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');

  const changCityFilters = (text) => {
    setCityFilter(text)
  }

  const changePriceFilter = (text) => {
      setPriceFilter(text)
  }

  const changingFilters = () => {
      changeFilters(cityFilter, priceFilter);
  }

  return (
      <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-2
   bg-white lg:bg-transparent lg:backdrop-blur rounded-lg' >
        <CityDropdown changeFilter={ changCityFilters }/>
        <PriceDropdown changeFilter={ changePriceFilter }/>
        <button onClick={ changingFilters }
                className='bg-red-700 hover:bg-red-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'>
          <div>Search</div>
        </button>
      </div>
  );
};

export default Search;