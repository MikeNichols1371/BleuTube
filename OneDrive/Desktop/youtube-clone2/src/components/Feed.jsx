import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from './';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

  // Create hook that will take the default 'New' selected category and update it as new categories are selected
  const [ selectedCategory, setSelectedCategory ] = useState( 'New' );

  // Do the same for videos except set default value to an empty array
  const [ videos, setVideos ] = useState( [ ] ); 

  // useEffect is life cycle hook gets called when component initially loads. It needs a dependency array. Displays data immediately based on category selected
  useEffect ( () => {
    fetchFromAPI( `search?part=snippet&q=${ selectedCategory }` )  // https://rapidapi.com/ytdlfree/api/youtube-v31/ search params
      .then( ( data ) => { setVideos( data.items ) } ) // since fetchFromAPI is an async function and returns a promise we have to use a .then callback
  }, [ selectedCategory ] );

  return (
    <Stack sx = { { flexDirection: {sx: "column", md: "row" } } }> { /* assigns structure based on screen size */ }

      <Box sx = { { height: { sx: 'auto', md: '92vh', borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } } } }>  { /* SideBar Feed */ }
          <SideBar
          selectedCategory = { selectedCategory }
          setSelectedCategory = { setSelectedCategory } />
          <Typography className = "copyright" variant = "body2" sx = { { mt: 1.5, color: '#fff' } }> { /* replaces p tags and headings */ }
              Copyright 2022 BleuTube  
          </Typography>
      </Box>

      <Box p = { 2 } sx = { { overflowY: 'auto', height: '90vh', flex: 2 } }> { /* Videos Feed */ }
        <Typography variant = 'h4' fontWeight = 'bold' mb = { 2 } sx= { { color: 'white' } }>
         { selectedCategory } <span style = { { color: '#0000eb' } }>Videos</span> 

        </Typography>

        <Videos videos = { videos } /> 
      </Box>
    </ Stack>
  )
}

export default Feed