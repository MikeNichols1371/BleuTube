import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack  } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const [ videoDetail, setVideoDetail ] = useState( null );
  const [ videos, setVideos ] = useState( [ ] ) 
  const { id } = useParams(); // Gets video id

   useEffect( () => {
      fetchFromAPI( `videos?part=snippet,statistics&id=${ id }` ) // https://rapidapi.com/ytdlfree/api/youtube-v31/ video details params  Main Video
      .then( ( data ) => setVideoDetail( data.items[ 0 ] ) )
      
      fetchFromAPI(`search?part=snippet&relatedToVideoId=${ id }&type=video`) // https://rapidapi.com/ytdlfree/api/youtube-v31/ related videos params
      .then( ( data ) => setVideos( data.items ) )
   }, [ id ] )

      // fetchFromAPI( `search?part=snippet&relatedVideoId=${ id }&type=video`) // suggested videos params   Related Videos
      // .then( ( data ) => setVideoDetail( data.items ) )
   if ( !videoDetail?.snippet ) return 'Loading...'

   // Destructure snippet and statistics and theyre components so you can call component by name
   const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail 
  return (
    <Box minHeight = "95vh"> 
      <Stack direction = { { xs: 'column', md: 'row' } }>
          <Box flex = { 1 }>
            <Box sx = { { width: '100%', position: 'sticky', top: '86px' } }> { /* Main Video */ }
              <ReactPlayer url = { `https://www.youtube.com/watch?v=${ id }` }
              className = "react-player" controls /> { /* Displays Video */ }
              <Typography color = '#fff' variant = "h5" fontWeight = "bold" p = { 2 }> { /* Main video title  style */ }
                { title }  { /* Video title  */ }
              </Typography>

              <Stack direction = "row" justifyContent = "space-between" sx = { { color: '#fff' } } py = { 1 } px = { 2 }>
                  <Link to = { `/channel/${ channelId }`}>
                    <Typography variant = { { sm: 'subtitle1', md: 'h6' } } color = "#fff">  { /*Main video channe title style */ }
                    { channelTitle } { /* Channel title  */ }
                    <CheckCircle sx = { { fx: '12px', color: 'gray', ml: '5px' } } />
                    </Typography> 
                  </Link>

                  <Stack direction = "row" gap = "20px" alignItems = "center">
                    <Typography variant = "body1" sx = { { opacity: 0.7 } }>
                          { parseInt(viewCount).toLocaleString() } views   { /* parseInt().toLocaleString() adds the dots and commas for the view count*/ }
                    </Typography>
                    <Typography variant = "body1" sx = { { opacity: 0.7 } }>
                          { parseInt(likeCount).toLocaleString() } likes   { /* parseInt().toLocaleString() adds the dots and commas for the view count*/ }
                    </Typography>
                  </Stack>
              </Stack>
            </Box>
          </Box>
      <Box px = { 2 } py = { { md: 1, xs: 5} } justifyContent = "center" alignItems = "center">  { /* Related Videos */ }
        <Videos videos = { videos } direction = "column" />
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail