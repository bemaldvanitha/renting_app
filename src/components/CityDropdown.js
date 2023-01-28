import React, { useContext, useState } from 'react'
import { Menu , Dropdown,  Space} from 'antd';
import { DownOutlined } from '@ant-design/icons';


import { HouseContext } from './HouseContext';
const CityDropdown = () => {
  const country = useContext(HouseContext);
  const countries = useContext(HouseContext);
  const setCountry = useContext(HouseContext);


  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer">
          Colombo 
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" >
          Gamhpha 
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" >
          Galle
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a target="_blank" rel="noopener noreferrer" >
          Kandy
        </a>
      ),
    },
  ];
  return <Menu as='div' className='dropdown relative'>
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
       City
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  </Menu>;

};

export default CityDropdown;