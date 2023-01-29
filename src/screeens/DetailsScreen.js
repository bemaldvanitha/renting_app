import React, { useState, useEffect } from 'react'
import {  } from 'antd';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/index';

const DetailsScreen = () => {
  const [property, setProperty] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
      setError('');
      const docRef = doc(db, "properties", "0AlGkrDhIoUaQKoCDnsp");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
          const house = { ...docSnap.data() };
          house.id = docSnap.id;
          setProperty(house);
      } else {
          setError('No Property Found');
      }
  }

  return (
      <div>

      </div>
    );
}

export default DetailsScreen;