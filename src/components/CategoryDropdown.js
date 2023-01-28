import React, { useContext } from 'react'
import { HouseContext } from './HouseContext';
import { Menu } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const CategoryDropdown = () => {
  const property = useContext(HouseContext);
  const properties = useContext(HouseContext);
  const setProperty = useContext(HouseContext);

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer">
          Single room - 2 beds
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" >
           Single room - 1 bed
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" >
          Single room - 5 beds 
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
        properties
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  </Menu>;

};

export default CategoryDropdown;