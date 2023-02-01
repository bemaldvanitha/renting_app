import React, { useState,createContext} from 'react'
//import {housesData} from '../data'

//create context of bodim
export const HouseContext=createContext();

const HouseContextProvider= ({childern}) => {
    const[houses,setHouses]=useState();
    const[country,setCountry]=useState('Location (any)');
    const[countries,setCountries]=useState([]);
    const[property,setProperty]=useState('Property type (any)');
    const[properties,setProperties]=useState([]);
    const[price,setPrice]=useState('Price range(any)');
    const[loading,setLoading]=useState(false);

  return <HouseContext.Provider value={
    {
       country,
       setCountry,
       countries,
       property,
       setProperty,
       properties,
       price,
       setPrice,
       houses,
       loading,
    }
  }>
    {childern}
  </HouseContext.Provider>;
};

export default HouseContextProvider ;