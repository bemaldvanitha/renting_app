import React, { useState } from 'react'
import { HeartOutlined } from '@ant-design/icons';
import { Card, Rate, Tag } from 'antd';
import Image from '../assets/img/th.jpg';
import { db } from '../firebase/index';
const { Meta } = Card;


const AppCard = () => {
  const [description, setDescription] = useState([]);

  window.addEventListener('load', () => {
    Fetchdata();
  });

  const Fetchdata = async () => {
    db.collection("properties");
    const data = await db.get();

    data.docs.forEach(item => {

      setDescription([...data, item.data()]);


      //     const response=db.collection('properties');
      //     const data=await response.get();
      //     data.docs.forEach(item=>{
      //      setDescription([...data,item.data()])
    })
  }

  return (

    <Card
      style={{
        width: 300,
      }}
      cover={
        <img src={Image} alt='' />
      }
      actions={[
        <Rate />,
        <HeartOutlined />,
      ]}
    >

      {
            description.map((data) => (
        <Meta
          title={data.title}
          description={data.description}
        />
            ))
      }
      <Tag color="red">Price: 5000</Tag>

    </Card>
    

    );
}
// const Frame = ({ title, description }) => {
//   console.log(title + " " + description);
//   return (
//     description.map((data) => (
  
 
  
//     <Meta>
//       <div className="div">
//         <p>title : {data.title}</p>
//         <p>Description: {data.description}</p>
//       </div></Meta>
//   ))
//   );

export default AppCard;