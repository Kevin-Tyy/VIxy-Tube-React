import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card , CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({ video : { id : { videoId}, snippet}}) => {
  return (
    <Card sx={{width : {  xs : '100%',sm : '315px',md : '315px'}, boxShadow : 'none' , borderRadius : 0 }}>
        <Link to={`/video/${videoId}`} >
            <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                alt = {snippet?.title}
                sx={{width: {xs : '100%', sm: '358px' ,md: '315px' }, height: 180}}
            />
        </Link>
        <CardContent
            sx={{backgroundColor : '#090909',   
            height: 106
        }}>
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
        </CardContent>


    </Card>

  )
}

export default VideoCard;