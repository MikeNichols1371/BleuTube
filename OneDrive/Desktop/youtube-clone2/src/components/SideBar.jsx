import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';


// Pass in selectedCategory and setSelectedCategory from Feed.jsx
const SideBar = ( { selectedCategory, setSelectedCategory } ) => 
  (
    <Stack direction = "row" sx = { { overflow: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column ' } } }>
      { /* Loop over categories and assign approriate name and styles*/ }
        { categories.map( ( category ) => (
          <button 
          className = "category-btn" 
          onClick = { () => setSelectedCategory( category.name ) } // Call back function that will set selectedCategory name to new category selected on click of sidebar button
          style = { { background: category.name ===  selectedCategory && '#0000ff', color: '#ffffff' } }
          key = { category.name } 
          >
            <span style = { { color: category.name === selectedCategory ? '#ffffff' : '#0000ff', marginRight: '15px' } }> { category.icon } </span>
            <span style = { { opacity: category.name === selectedCategory ? '1' : '0.8' } }> { category.name } </span>
          </button>
        ) )}
    </Stack>
  )


export default SideBar