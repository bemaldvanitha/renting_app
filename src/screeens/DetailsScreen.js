import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Card, Carousel, Image, Button } from 'antd';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/index';
import CusHeader from '../components/Header';

const { Meta } = Card;
const DetailsScreen = () => {
  const [property, setProperty] = useState({});
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
      setError('');
      const docRef = doc(db, "properties", `${id}`);
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
        <CusHeader/>
        <center style={{backgroundColor: '#e2e5fc' }}>
          { Object.keys(property).length !== 0 ?
              <Card
                  style={{  width: 900, paddingTop: '25px', borderRadius: '50'

                  }}
                  cover={
                      <Carousel autoplay={true}>
                          { property.imageUrls.map(img => {
                              return(
                                  <div key={img}>
                                      <Image
                                          
                                          width={600}
                                          height={400}
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
                  <p> 
                  <Button style={{color:'#ae2012', margin: '15px 0 0 0'}}>Price : {property.price} LKR</Button>
                    </p>

                  <p> <Button>Location : {property.location}</Button></p>
                  <p><Button>Bedrooms : {property.bedrooms}  |   Bathrooms : {property.bathrooms}</Button> </p>
                  <p><Button style={{backgroundColor: '#03fc66', color: '#ffff'}}>Contact Renter</Button></p>

                  
                  
                </Card> : <div></div>
          }
          </center>
      </div>
    );
}

export default DetailsScreen;