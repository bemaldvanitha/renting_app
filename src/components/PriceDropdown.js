import React, { useContext,useState} from 'react'
import {Menu, Dropdown, Space, Select} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import '../styles/Home.css';


const PriceDropdown = ({ changeFilter }) => {

    const options = [
        {
            value: '1',
            label: '0 - 5000',
        },
        {
            value: '2',
            label: '5000 - 10000',
        },
        {
            value: '3',
            label: '10000 - 15000',
        },
        {
            value: '4',
            label: '15000 - 20000',
        },
        {
            value: '5',
            label: '20000 - 100000',
        }
    ];

    const itemSelect = (value) => {
        const priceRange = options.find(option => option.value.toString() === value.toString()).label;
        changeFilter(priceRange);
    }

  return (
    <div className='dropdown'>
      <Select
          showSearch
          style={{
              width: 200,
          }}
          onSelect={ (e) => itemSelect(e) }
          placeholder="Search to Select Price"
          optionFilterProp="children"
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={ options }
      />
      </div>
  );
};

export default PriceDropdown;