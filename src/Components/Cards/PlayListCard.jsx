import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card , CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

const Playlist = ({playlist: { id : { playlistId } , snippet} }) => {
  return (
  
    <Card sx={{width : { md : '315px', xs : '100%'}, boxShadow : 'none' , borderRadius : 0 }}>
        <Link to={`/video/${playlistId}`} >
            <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                alt = {snippet?.title}
                sx={{width: 358, height: 180}}
            />
        </Link>
        <CardContent
            sx={{backgroundColor : '#090909',   
            height: 106
        }}>
            <Link to={`/video/${playlistId}` }>
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

export default Playlist