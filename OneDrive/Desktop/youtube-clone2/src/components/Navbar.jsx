import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';

import SearchBar from './SearchBar';


const Navbar = () => 
  (
    // Hover stack to and click links to see more info and what properties it can accept
    <Stack direction = "row" alignItems = "center" p = { 2 } sx = { { position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' } }>
        <Link to = "/" style = { { display: 'flex', alignItems: 'center' } }>  { /* Style for Home Icon */ }
          <img src = { logo } alt = "logo" height = { 45 }/> { /* Home Icon */ }
        </Link>
        <SearchBar />
    </Stack>

    
  );


export default Navbar