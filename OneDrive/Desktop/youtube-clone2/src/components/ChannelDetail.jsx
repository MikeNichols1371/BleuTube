import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [ channelDetails, setChannelDetails ] = useState( null ); // Hook function to set the channel details each time a new one is selected
  const [ videos, setVideos ] = useState( [ ] ); // Hook function to set the videos feed.jsx
  const { id } = useParams(); // Hook function to return key value pair for id
  
  console.log(channelDetails)
  
  useEffect( () => {
    fetchFromAPI( `channels?part=snippet&id=${ id }` ) // Find channel details based on the id  https://rapidapi.com/ytdlfree/api/youtube-v31/ channel details params
    .then( ( data ) => setChannelDetails( data?.items[ 0 ] ) ); // Use .then to return the data promise and then set channel details to the first channel in the list 

    fetchFromAPI( `search?channelId=${ id }&part=snippet&order=date` ) // Find all the videos for the respective channel https://rapidapi.com/ytdlfree/api/youtube-v31/ channel video params
    .then( ( data ) => setVideos( data?.items ) ); // Use .then to return the data promise and then set set the video details for that channel 
  }, [ id ] )
  
  return (
    <Box minHeight = "95vh">
      <Box>
        <div style = { {  
          background: 'linear-gradient(0deg, rgba(0,131,117,1) 0%, rgba(0,0,112,1) 100%)', // Find color gradient at https://cssgradient.io/ 
          zIndex: 10,  
          height: '300px'
        } } />
        <ChannelCard channelDetails = { channelDetails } marginTop=  '-120px' />
      </Box>
      <Box display = "flex" p = "2" >
        <Box sx = { { mr: { sm: '100px' } } } />
          <Videos videos = { videos } /> 
      </Box>
    </ Box>
  )
}

export default ChannelDetail