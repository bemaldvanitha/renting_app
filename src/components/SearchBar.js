import react from 'react'
import { Input, Space } from 'antd';
import '../styles/Home.css';
const { Search } = Input;

const SearchBar = ({ changeSearchTxt }) => {

    const onSearch = (value) => {
        changeSearchTxt(value);
    };

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