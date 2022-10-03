import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
 

// Pass in channelDetails from videos.jsx
const ChannelCard = ( { channelDetails, marginTop } ) => 
 (
    <Box sx = { { 
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { sx: '356px', md: '320px' },
      height: '326px',
       margin: 'auto', 
       marginTop: marginTop } }>
      <Link to = { `/channel/${channelDetails?.id?.channelId}` }>
        <CardContent sx = { { display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' } } >
          <CardMedia 
          image = { channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture } 
          alt = { channelDetails?.snippet?.title } 
          sx = { { borderRadius: '50%' , width: '180px', height: '180px', mb: 2, border: '1px solid #e3e3e3' } } />  
          <Typography variant = "h6">
            { channelDetails?.snippet?.title}
            <CheckCircle sx = { { fontSize: 14, color: 'gray', ml: '5px' } } />
          </Typography>
          { /* Check if channel has subscribers and if they do parse the return into a integer to be displayed */}
          {channelDetails?.statistics?.subscriberCount && (
            <Typography>
              { parseInt( channelDetails?.statistics?.subscriberCount ).toLocaleString( 'en-US' ) } Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )


export default ChannelCard