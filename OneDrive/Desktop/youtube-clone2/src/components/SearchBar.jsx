import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState( '' );

  const navigate = useNavigate(); // set variable to useNavigate hook which allows us to change search locations
  const handleSubmit = ( e ) => {
    e.preventDefault(); // prevents page from reloading on submit

    if ( searchTerm ) {
      navigate(`/search/${ searchTerm }`);

      setSearchTerm( ' ' ); // Set search term back to an emptry string
    }
  }
  return (
    <Paper  // Paper is a div component with a white background and elevation
    component = 'form'
    onSubmit = { handleSubmit } 
    sx = { { 
      borderRadius: 20, 
      border: '1px solid #e3e3e3', 
      pl: 2,
      boxShadow: 'none',
      mr: { sm: 5 }  } } >
        <input className = "search-bar" placeholder = "Search..." value = { searchTerm } onChange = { ( e ) => setSearchTerm( e.target.value ) } />
        <IconButton type = "submit" sx = { { p: '10px', color: '#0000ff' } } >  
            <Search />
        </IconButton>
    </Paper> 
  )
}

export default SearchBar;