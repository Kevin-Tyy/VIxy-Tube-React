import React , {useState , useEffect}from 'react'
import { Link , useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import { CheckCircle, DownloadOutlined,  SaveAlt,ShareOutlined,  ThumbUpAltOutlined, ThumbDownAltOutlined } from '@mui/icons-material'
import Tooltip from '@mui/material/Tooltip';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';

import { Loader,  Videos } from './'
import { fetchFromAPI } from '../utils/FetchFromApi'

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [Subscribe , setSubscribe] = useState("Subscribe"); 
  const { id } = useParams();
  const WATCH_URL = 'https://youtube.com/watch';

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data)=> setVideoDetail(data.items[0]))


    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`) 
      .then((data => setVideos(data.items))) 


  }, []);
  
  if(!videoDetail?.snippet){
    return <Loader/>
  }
  

  const { snippet : { title, channelId, channelTitle}, statistics : { viewCount , likeCount, commentCount}} = videoDetail

  console.log(videoDetail)
  return (
    <Box minHeight={'95vh'} width={{ sx : 0, lg : '90%' }} ml= {{ sx : 0 , lg : '150px' }}>
      <Stack direction={{ xs : 'column' , md : 'row'}}>
        <Box flex={1} sx={{position : { sx: 'relative', md : 'sticky'} , top: '86px' ,zIndex : '999'}}>
          <Box sx={{width : '98%', overflow : 'scroll'  }}>
            <ReactPlayer url={`${WATCH_URL}?v=${id}`} className="react-player" controls playing={true} muted={false}/>
            <Typography color={'#fff'} variant='h6' fontWeight='bold' p={2}>
              {title} 
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color : "#fff"}}  px={2}>
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
                    <Button sx={{ borderRadius : '50px 0 0 50px !important',p : '10px'}} className='video-detail-btns'>
                      <ThumbUpAltOutlined fontSize='small'/> &nbsp;&nbsp;
                      <Typography variant='body2' sx={{opacity : 0.7}}>
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
                      <Typography variant='body2' sx={{opacity : 0.7 , display : { sm: 'none' , md : 'block'}}}>
                        Share
                      </Typography>
                  </Button>
                </Tooltip>
                <Tooltip title="Download" arrow>
                  <Button className='video-detail-btns'>
                    <DownloadOutlined fontSize='small'/>&nbsp;&nbsp;
                    <Typography variant='body2' sx={{opacity : 0.7 , display : { sm: 'none' , md : 'block'}}}>
                      Download
                    </Typography>
                  </Button>
                  
                </Tooltip>
                <Tooltip title="Save" arrow>
                  <Button className='video-detail-btns'>
                    <SaveAlt fontSize='small'/>&nbsp;&nbsp;
                    <Typography variant='body2' sx={{opacity : 0.7 , display : { sm: 'none' , md : 'block'}}}>
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
   
            <Accordion sx={{backgroundColor : '#ffffff1d' , color: '#fff', borderRadius : '10px' ,my : '20px', py: '10px'}}>
              <AccordionSummary  expandIcon={<ExpandMoreIcon sx={{ color : '#fff' , height : '50px', pb : '10px'}}/>}>
                <Typography sx={{ mr : '20px'}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography>
                  Feb 15, 2023 
                </Typography>
                
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus qui, impedit dolorum reprehenderit id hic voluptatem harum omnis minima quos labore autem perferendis consectetur incidunt beatae aspernatur! Dolor, sunt ratione eveniet labore porro quibusdam dolorem totam harum facilis velit modi veritatis perferendis ad dolores adipisci nemo eum iste iure explicabo est saepe. Dicta sed voluptas voluptates esse repudiandae et deserunt.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Typography sx={{color : '#fff'}}>
              {commentCount} Comments
            </Typography>
  
            <Box sx={{ display: 'flex', alignItems: 'center' , justifyContent : 'space-between'}}>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '85%'}}>
                <Avatar sx={{mr: '10px'}}>J</Avatar>
                <TextField id="input-with-sx"
                label="Add your comment"
                variant="standard" 
                sx={{my: "20px" ,py : '10px', width: '100% !important', input : { color : 'white'}, label : { color : 'white'} }}
                InputLabelProps={{
                  sx: {
                    color: "red",
                    "&.Mui-focused": {
                      color: "white",
                    
                    },
                    
                  },
                }}
                />

              </Box>
              <Box>
                <Button sx={{ mr : '10px'}} className='video-detail-btns'>
                  Cancel
                </Button>
                <Button sx={{}} className='video-detail-btns'>
                  Send Comment
                </Button>
              </Box>
              
            </Box>

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