import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartOutlined } from '@ant-design/icons';
import { Card, Rate, Tag } from 'antd';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/index';
import '../styles/Home.css';
const { Meta } = Card;

const AppCard = ({ filters, search }) => {
  const [properties, setProperties] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  },[ filters, search ]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "properties"));
    const allProperties = [];

    querySnapshot.forEach((doc) => {
      const data = { ...doc.data() };
      data.id = doc.id;


      console.log(data);
      const cityFilter = filters.city;
      const priceFilters = filters.price.split('-');

      if(!data.title.includes(search)){
          return;
      }

      if((data.location.toString() === cityFilter.toString()) || (parseInt(priceFilters[0]) < data.price &&
          parseInt(priceFilters[1]) > data.price) || (cityFilter.length === 0 && filters.price.length === 0)){
          allProperties.push(data);
      }
    });

    setProperties(allProperties);
  }

  const detailRouting = (id) => {
      navigate(`/detail/${id}`);
  }

  return (
      properties.map((data) => {
        return(
          <div className='card' key={ data.id } onClick={ () => detailRouting(data.id) }>
            <Card
                style={{
                    width: 600,
                }}
                cover={
                  <img className='image-size' src={ data.imageUrls[0] } alt={ data.title } />
                }
                actions={[
                  <Rate />,
                  <HeartOutlined />,
                ]}
            >
                <Meta
                        title={ data.title }
                        description={ data.description.substring(0,20)  }
                    />
                <Tag color="red">Price: { data.price }</Tag>

            </Card>
            </div>
        )
      })

    );
}

export default AppCard;