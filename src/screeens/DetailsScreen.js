import React, { useState, useEffect } from 'react'
import { Card, Carousel, Image, Col, Avatar } from 'antd';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/index';

const { Meta } = Card;
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
          console.log(property);
          
      } else {
          setError('No Property Found');
      }
  }

  return (
      <div>
          { Object.keys(property).length !== 0 ?
              <Card
                  style={{
                      width: 1000,

                  }}
                  cover={
                      <Carousel autoplay={true}>
                          { property.imageUrls.map(img => {
                              return(
                                  <div key={img}>
                                      <Image
                                          width={400}
                                          src={img}
                                      />
                                  </div>
                              )
                          }) }
                      </Carousel>
                  }

              >
                  <Meta
                      title= {property.title}
                      description={property.description}
                  />
                  <p>Bathrooms : {property.bathrooms}</p>
                  <p>Bedrooms : {property.bedrooms}</p>
                  <p>Location : {property.location}</p>
                  <p>price : {property.price} LKR</p>
                </Card> : <div></div>
          }
      </div>
    );
}

export default DetailsScreen;