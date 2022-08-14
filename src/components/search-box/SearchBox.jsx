import React from 'react'
import './SearchBox.style.css'

export const SearchBox = ({className, placeholder, searchValue, onSearchInputChange}) => {
    return (
        <input 
        className={`search-box ${className}` }
        type='search' 
        placeholder= {placeholder} 
        value={searchValue} 
        onChange={e => onSearchInputChange(e)}>

        </input>
)
}

export default SearchBox
