import React , {useState , useEffect}from 'react'
import { Link , useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Button, Stack, Typography } from '@mui/material'
import { CheckCircle, DownloadOutlined,  SaveAlt,ShareOutlined,  ThumbUpAltOutlined, ThumbDownAltOutlined } from '@mui/icons-material'
import Tooltip from '@mui/material/Tooltip';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { Loader,  Videos } from './'
import { fetchFromAPI } from '../utils/FetchFromApi'

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [Subscribe , setSubscribe] = useState("Subscribe"); 
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
  

  const { snippet : { title, channelId, channelTitle, publishedAt}, statistics : { viewCount , likeCount}} = videoDetail

  console.log(videoDetail)
  return (
    <Box minHeight={'95vh'} width={{ sx : 0, lg : '90%'}} ml= {{ sx : 0 , lg : '100px'}} >
      <Stack direction={{ xs : 'column' , md : 'row'}}>
        <Box flex={1}>
          <Box sx={{width : '98%'  , top: '86px', overflowY : 'scroll'}}>
            <ReactPlayer url={`${WATCH_URL}?v=${id}`} className="react-player" controls playing={true} muted={false}/>
            <Typography color={'#fff'} variant='h6' fontWeight='bold' p={2}>
              {title} 
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{color : "#fff"}} py={1} px={2}>
              <Box>
                <Link to={`/channel/${channelId}`}>
                  
                  <Typography variant={{sm : 'body2', md : 'h6'}}
                    color="#fff"
                  >
                    {channelTitle}
                    <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px', mr: '20px'}}/>
                  </Typography>

                </Link>
                <Button sx={{ p : '5px 15px'}} onClick={()=> { setSubscribe("Subscribed")}} className='video-detail-btns'>
                  {Subscribe}
                </Button> 

              </Box>

              <Stack direction={'row'} gap="10px" alignItems="center">
            
                <Box sx={{ borderRadius : '50px' , display : 'flex', height : '35px' ,  justifyContent : 'center' , alignItems : 'center'}}>
                  <Tooltip title="I like this" arrow>
                    <Button sx={{ borderRadius : '50px 0 0 50px !important'}} className='video-detail-btns'>
                      <Typography variant='body2' sx={{opacity : 0.7}}>
                        <ThumbUpAltOutlined fontSize='small'/> &nbsp;&nbsp;
                        {parseInt(likeCount).toLocaleString()}
                      </Typography>
                    </Button>
                      
                  </Tooltip>  
                  <Tooltip title="I dislike this" arrow>
                    <Button sx={{  borderLeft : '1px solid #ffffff1d', height : '35px',borderRadius : '0 50px 50px 0 !important'  }} className='video-detail-btns'>
                      <ThumbDownAltOutlined fontSize='small'/>
                    </Button>

                  </Tooltip>
        
                </Box>
                <Tooltip title="Share" arrow>

                  <Button className='video-detail-btns'>
                      <ShareOutlined fontSize='small'/>&nbsp;&nbsp;
                      <Typography variant='body2' sx={{opacity : 0.7}}>
                        Share
                      </Typography>
                  </Button>
                </Tooltip>
                <Tooltip title="Download" arrow>
                  <Button className='video-detail-btns'>
                    <DownloadOutlined fontSize='small'/>&nbsp;&nbsp;
                    <Typography variant='body2' sx={{opacity : 0.7}}>
                      Download
                    </Typography>
                  </Button>
                  
                </Tooltip>
                <Tooltip title="Save" arrow>
                  <Button className='video-detail-btns'>
                    <SaveAlt fontSize='small'/>&nbsp;&nbsp;
                    <Typography variant='body2' sx={{opacity : 0.7}}>
                      Save
                    </Typography>
                  </Button>                  

                </Tooltip>
                <Tooltip title="more" arrow>
                  <Button className='video-detail-btns'>
                    <MoreHorizIcon/>
                  </Button>
                </Tooltip>
              </Stack>
            </Stack>
   
            <Accordion sx={{backgroundColor : '#ffffff1d' , color: '#fff', borderRadius : '10px' ,mt : '20px'}}>
              <AccordionSummary  expandIcon={<ExpandMoreIcon sx={{ color : '#fff' , height : '70px'}}/>}>
                <Typography sx={{ mr : '20px'}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography>
                  Feb 15, 2023 
                </Typography>
                
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veniam explicabo neque quam dolorum, sint sequi sunt quo quod reprehenderit sapiente ratione saepe aliquid enim minus ad? Voluptate iste quo error ut commodi molestiae repellendus deleniti enim facilis dignissimos expedita porro beatae quisquam tempore, debitis nihil architecto officiis, rerum nostrum!
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
        <Box px={2} py={{md : 1 , xs : 5}} justifyContent='center' alignItems='center'>
          <Typography variant='h6' sx={{ color : '#f9f9f9', mb : '10px'}}>
            Related Videos
          </Typography> 
          <Videos videos={videos} direction="column" marginRight={'100px'} />
        </Box>
      </Stack>

    </Box>
  )
}

export default VideoDetails