import React, { useState } from 'react'

const SearchBarContainer = ({setQuery,setRegion}) => {
  




  return (
    <div className='search-filter-container'>
        <div className='SearchBarContainer'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input onChange={(e)=>{setQuery(e.target.value.toLowerCase())}} className='search-bar' type="text" placeholder='Search for a country...' />
        </div>
        {/* <div className="filter-container"> */}
        <select className='select-menu' name="Africa" id="" onChange={(e)=>{setRegion(e.target.value)}}>
        <option hidden>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Antarctic</option>
        </select>
        {/* </div> */}
        
    </div>
  )
}

export default SearchBarContainer
