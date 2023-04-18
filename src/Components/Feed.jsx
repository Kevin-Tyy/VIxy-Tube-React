import React , {useState, useEffect} from 'react'
import {Box, Stack , Typography} from '@mui/material'
import {Sidebar, Videos} from './' 
import { fetchFromAPI } from '../utils/FetchFromApi'

const Feed = () => {

  const [selectedCategory , setSelectdeCategory] = useState("New");
  const [videos, setVideos] = useState([]);

 
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}&type=video,channel`)
      .then((data)=>
        setVideos(data.items)
    )

    
  }, [selectedCategory])
  return (
      <Stack sx={{flexDirection : { sx : "column", md : "row"}}}>
        <Box sx={{height : { sx : 'auto' , md : '93vh'}, borderRight : '1px solid #3d3d3d',px : {sx : 0, md : 2}}}>
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectdeCategory}
          ></Sidebar>

          <Typography className="copyright"  variant='body2' sx={{ my : 2,color : '#ffffff5d'}}>
              Copyright © 2023 Kevin Frontend<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All rights reserved
          </Typography>
        </Box>
        <Box p={2} sx={{overflowY : 'auto', height: '93vh', flex: 2}}>
          <Typography variant='h6' fontWeight="bold" mb={2} sx={{color : "white"}}>

            {selectedCategory}

            <span style={{color : "#1b37b4"}}> Videos</span>
          </Typography>

          <Videos videos={videos}/>
        </Box>
      </Stack>
  )
}

export default Feed;