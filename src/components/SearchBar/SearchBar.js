import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className='search_bar'>
        <IoSearch className='icons'/>
        <input
          type="text"
          placeholder="Search Icons"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </>
  );
};

export default SearchBar;
