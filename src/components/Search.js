import React from 'react'
import CityDropdown from './CityDropdown'
import CategoryDropdown from './CategoryDropdown'
import PriceDropdown from './PriceDropdown'
//import { HouseContext } from './HouseContext';


const Search = () => {
  //const housesRec = useContext(HouseContext);
  //console.log({ housesRec });


  return <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-2
   bg-white lg:bg-transparent lg:backdrop-blur rounded-lg' >
    <CityDropdown />
    <CategoryDropdown /> 
    <PriceDropdown />
    <button className='bg-red-700 hover:bg-red-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'>
      <div>Search</div>
    </button>
  </div>;
};

export default Search;