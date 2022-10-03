import React from 'react'
import { Stack, Box } from '@mui/material';
import  { VideoCard, ChannelCard }  from './';

    // Pass in and destructure videos prop from Feed.js
const Videos = ( { videos, direction } ) => {
  if (!videos.length) return "Loading,,,"; // if no videos return null

  return (
    <Stack direction = { direction || "row" } flexWrap = "wrap" justifyContent = "start" gap = { 2 }>
        { videos.map( ( item , index ) => (
            <Box key = { index }>
                { item.id.videoId && <VideoCard video = { item } /> }
                { item.id.channelId && <ChannelCard channelDetails = { item } /> }
            </Box> 
        )) }
    </Stack>
  )
}

export default Videos