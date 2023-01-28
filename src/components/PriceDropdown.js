import React, { useContext,useState} from 'react'
import {HouseContext} from './HouseContext';
import { Menu , Dropdown,  Space} from 'antd';
import { DownOutlined } from '@ant-design/icons';

const PriceDropdown = () => {
  const price=useContext(HouseContext);
   const setPrice=useContext(HouseContext);
 
   const[isOpen,setIsOpen] = useState(false);

   const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer">
          Rs 4000 - 8000
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" >
            Rs 8000 - 15000
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" >
           over than 15000
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
       Price range
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  </Menu>;
};

export default PriceDropdown;