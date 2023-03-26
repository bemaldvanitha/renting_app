import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

//import components
import HomeBanner from '../components/HomeBanner'
import CusHeader from '../components/Header';

const HomeList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if(currentUser === null){
      navigate('/sign-in');
    }
  },[]);

  return <div className='min-h-[1800px]' style={{backgroundColor: '#e2e5fc'}}>
    <CusHeader/>
    <HomeBanner/>
  </div>;
};

export default HomeList;