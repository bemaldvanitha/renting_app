import React, { useContext, useState } from 'react'
import { Menu , Dropdown,  Space, Select } from 'antd';

const CityDropdown = ({ changeFilter }) => {

    const options = [
        {
            value: '1',
            label: 'Colombo',
        },
        {
            value: '2',
            label: 'Kandy',
        },
        {
            value: '3',
            label: 'Matara',
        },
        {
            value: '4',
            label: 'Galle',
        },
        {
            value: '5',
            label: 'Gampaha',
        },
        {
            value: '6',
            label: 'Kalutara',
        },
    ];

      const itemSelect = (value) => {
          const cityName = options.find(option => option.value.toString() === value.toString()).label;
          changeFilter(cityName);
      }

  return (
    <Select
        showSearch
        style={{
            width: 200,
        }}
        onSelect={ (e) => itemSelect(e) }
        placeholder="Search to Select City"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={ options }
    />
  );

};

export default CityDropdown;