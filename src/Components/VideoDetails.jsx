import React , {useState , useEffect}from 'react'
import { Link , useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Stack, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { Video } from './'
import { fetchFromAPI } from '../utils/FetchFromApi'

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const { id } = useParams()
  const WATCH_URL = 'https://www.youtube.com/watch';

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data)=> setVideoDetail(data.items[0]))

  }, []);
  
  if(!videoDetail?.snippet){
    return 'loading...'
  }

  const { snippet : { title, channelId, channelTitle}, statistics : { viewCount , likeCount}} = videoDetail
  console.log(videoDetail)
  return (
    <Box minHeight={'95vh'}>
      <Stack direction={{ xs : 'column' , md : 'row'}}>
        <Box flex={1}>
          <Box sx={{width : '100%', position : 'sticky' , top: '86px'}}>
            <ReactPlayer url={`${WATCH_URL}?v=${id}`} className="react-player" controls/>
            <Typography color={'#fff'} variant='h6' fontWeight='bold' p={2}>
              {title} 
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{color : "#fff"}} py={1} px={2}>
                <Link to={`/channel/${channelId}`}>
                  <Typography variant={{sm : 'body2', md : 'h6'}}
                    color="#fff"
                  >
                    {channelTitle}
                    <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
                  </Typography>
                </Link>
                <Stack direction={'row'} gap="20px" alignItems="center">
                  <Typography variant='body2' sx={{opacity : 0.7}}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>

                  <Typography variant='body2' sx={{opacity : 0.7}}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails