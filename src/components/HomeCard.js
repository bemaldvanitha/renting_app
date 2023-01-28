import React, { useState, useEffect } from 'react'
import { HeartOutlined } from '@ant-design/icons';
import { Card, Rate, Tag } from 'antd';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/index';
const { Meta } = Card;


const AppCard = () => {
  const [description, setDescription] = useState([]);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "properties"));
    const allProperties = [];

    querySnapshot.forEach((doc) => {
      const data = { ...doc.data() };
      data.id = doc.id;
      allProperties.push(data);
    });

    setProperties(allProperties);
  }

  return (

      properties.map((data) => {
        return(
            <Card
                key={ data.id }
                style={{
                    width: 600,
                }}
                cover={
                  <img src={ data.imageUrls[0] } alt={ data.title } />
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
        )
      })

    );
}

export default AppCard;