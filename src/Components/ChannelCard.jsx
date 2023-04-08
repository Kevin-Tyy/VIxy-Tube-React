import React from 'react'
import { CardContent, CardMedia, Typography, Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box
    sx={{
        boxShadow : 'none',
        borderRadius : '20px',
        display : 'flex',
        justifyContent : 'center',
        alignContent : 'center',
        width: {xs : "356px" , md : "315px"},
        height : '326px',
        margin : 'auto',
        marginTop : marginTop
    }}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent
            sx={{
                display : 'flex',
                flexDirection : 'column',
                justifyContent : 'center',
                alignContent : 'center',
                textAlign : 'center',
                color : 'white'
            }}>
                <CardMedia
                    image={channelDetail?.snippet?.thumbnails?.high?.url}
                    alt={channelDetail?.snippet?.title}
                    sx={{
                        borderRadius : '50%',
                        width : '180px',
                        height : '180px',
                        mb: 2,
                        border : '1px solid #e3e3e3',
                        
                    }}
                />
                <Typography variant='h6'>
                    {channelDetail.snippet?.title}
                    <CheckCircle sx={{ fontSize : 13 , ml : '5px'}}/>
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography color="gray">
                        {
                            parseInt(channelDetail.statistics?.subscriberCount).toLocaleString()
                        } Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>

    </Box>
  )
}

export default ChannelCard