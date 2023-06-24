import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card , CardContent, CardMedia , Stack, Box} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({ video : { id : { videoId}, snippet}}) => {
  return (
    <Card sx={{width : { xs : '100%',sm : '358px', md : '315px'}, boxShadow : 'none' , borderRadius : 0 , height : '295px'}}>
        <Link to={`/video/${videoId}`} >
            <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                alt = {snippet?.title}
                sx={{width: { xs : '100%', sm : '358px' }, height: 180}}
            />
        </Link>
        <CardContent
            sx={{backgroundColor : '#090909',   
            height: 106
        }}>

            <Stack direction='row'>
                <Box sx={{width: '40px', backgroundColor : 'black', height : '40px' , overflow: 'hidden' , mr: '10px', borderRadius: '50%'}}>
                    <Link to={`/channel/${snippet?.channelId}`}>
                        <img src={snippet?.thumbnails?.high?.url} width={'40px'} height={'40px'} style={{  objectFit : 'cover' , transform : 'scale(1.3)'}}/>

                    </Link>
                </Box>

                <Box sx={{width: '85%'}}>
                    <Link to={`/video/${videoId}` }>
                        <Typography variant='subtitle1' fontWeight="bold" color="#fff" fontSize ='12px'>
                            {snippet?.title.slice(0,100)}
                        </Typography>

                    </Link>      
                    <Link to={`/channel/${snippet?.channelId}`}>
                        
                        <Typography variant='subtitle2' fontWeight="bold" color="gray"  fontSize ='11px'>
                            {snippet?.channelTitle}
                            <CheckCircle sx={{ fontSize : 12 , ml : '5px'}}/>
                        </Typography>

                    </Link>
                </Box>

            </Stack>

        </CardContent>


    </Card>

  )
}

export default VideoCard;