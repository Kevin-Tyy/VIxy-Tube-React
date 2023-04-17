import React from 'react'
import { Stack , Box} from '@mui/material';
import {VideoCard, ChannelCard, Playlist, Loader} from './'

const Videos = ({videos, direction, marginRight}) => {
    console.log(videos);

    if(!videos?.length){
      return <Loader/>
    }

  return (  
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" gap={2} marginRight={{ sx : 0, lg : marginRight}} >
        {videos.map((item, index)=>(
           <Box key={index}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channelDetail={item}/>}
            {item.id.playlistId && <Playlist playlist={item}/>} 
           </Box> 
        ))}

    </Stack>
  )
}

export default Videos