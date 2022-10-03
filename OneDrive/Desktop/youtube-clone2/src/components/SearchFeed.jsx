import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const SearchFeed = () => {

  // Do the same for videos except set default value to an empty array
  const [ videos, setVideos ] = useState( [ ] ); 

  const { searchTerm } = useParams();

  // useEffect is life cycle hook gets called when component initially loads. It needs a dependency array. Displays data immediately based on category selected
  useEffect ( () => {
    fetchFromAPI( `search?part=snippet&q=${ searchTerm }` )  // https://rapidapi.com/ytdlfree/api/youtube-v31/ search params
      .then( ( data ) => { setVideos( data.items ) } ) // since fetchFromAPI is an async function and returns a promise we have to use a .then callback
  }, [ searchTerm ] );

  return (
<Box  p = { 2 } sx = { { overflowY: 'auto', height: '90vh', flex: 2} }> { /* Videos Feed */ }
  <Typography variant = 'h4' fontWeight = 'bold' mb = { 2 } sx= { { color: 'white' } }>
    Search Results for <span style = { { color: '#0000ff' } }>{ searchTerm }</span> videos
  </Typography>
  <Box display = "flex" p = "2">
    <Box sx = { { mr: { sm: '100px' } } } />
      <Videos videos = { videos } />
    </Box>
</Box>
  )
}

export default SearchFeed