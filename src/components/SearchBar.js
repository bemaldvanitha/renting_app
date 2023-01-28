import react from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import '../styles/Home.css';
const { Search } = Input;

const onSearch = (value) => console.log(value);
const SearchBar = () => {
    return(
        <div className='searchBar'>
        <Search
      placeholder="Search your place"
      allowClear
      onSearch={onSearch}
      style={{
        width: "large",
      }}
    />
    </div>
    )
};

export default SearchBar;