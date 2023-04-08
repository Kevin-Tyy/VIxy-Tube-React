import React , {useState , useEffect}from 'react'
import { Link , useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import { CheckCircle, Download, SaveAlt, Share, ThumbDownAltSharp, ThumbUpRounded } from '@mui/icons-material'

import { Loader,  Videos } from './'
import { fetchFromAPI } from '../utils/FetchFromApi'

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  let [videos, setVideos] = useState(null);

  const { id } = useParams()
  const WATCH_URL = 'https://www.youtube.com/watch';

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data)=> setVideoDetail(data.items[0]))


    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`) 
      .then((data => setVideos(data.items))) 

  }, []);
  
  if(!videoDetail?.snippet){
    return <Loader/>
  }
  

  const { snippet : { title, channelId, channelTitle}, statistics : { viewCount , likeCount}} = videoDetail
  console.log(videoDetail)
  return (
    <Box minHeight={'95vh'} width={{ sx : 0, lg : '95%'}} ml= {{ sx : 0 , lg : '100px'}} >
      <Stack direction={{ xs : 'column' , md : 'row'}}>
        <Box flex={1}>
          <Box sx={{width : '100%', position : 'sticky' , top: '86px'}}>
            <ReactPlayer url={`${WATCH_URL}?v=${id}`} className="react-player" controls playing={true} muted={false}/>
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
                  <Box sx={{backgroundColor : '#ffffff4d', borderRadius : '50px'}}>
                    <Box sx={{ p: 2 , borderRight : '2px solid #fff'}}>
                      <Typography variant='body2' sx={{opacity : 0.7}}>
                        <IconButton sx={{ color : 'white'}}>
                          <ThumbDownAltSharp/>
                        </IconButton>
                        {parseInt(likeCount).toLocaleString()} likes
                      </Typography>

                    </Box>
                    <IconButton sx={{ color : 'white'}}>
                      <ThumbDownAltSharp/>
                    </IconButton>
                    
                  </Box>

                  <Typography>
                    <Button>
                        <Typography variant='body2' sx={{opacity : 0.7}}>
                          <Share/>
                          Share
                        </Typography>
                    </Button>

                  </Typography>
                      <Button>
                        <Typography variant='body2' sx={{opacity : 0.7}}>
                          <Download/>
                          Download
                        </Typography>
                      </Button>
                  <Typography>
                      <Button>
                        <Typography variant='body2' sx={{opacity : 0.7}}>
                          <SaveAlt/>
                          Save
                        </Typography>
                      </Button>
                  </Typography>
                  

                  
                </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md : 1 , xs : 5}} justifyContent='center' alignItems='center'>
          <Typography variant='h6' sx={{ color : '#f9f9f9', mb : '10px'}}>
            Related Videos
          </Typography>
          <Videos videos={videos} direction="column" marginRight={'100px'}/>
        </Box>
      </Stack>

    </Box>
  )
}

export default VideoDetails