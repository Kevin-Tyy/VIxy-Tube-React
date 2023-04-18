import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/FetchFromApi";

const ChannelDetails = () => {
	const { id } = useParams();
	const [channelDetail, setChannelDetail] = useState(null);
  const [videos , setVideos] = useState([]);

	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0])
		  );

		fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items)
		);

	}, [id]);
  console.log(channelDetail, videos)
   return (
      <Box minHeight='95vh'>
        <Box>
          <div
            style={{ background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,132,1) 100%)',
            zIndex: 10,
            height: '300px'
          }}
          />
            {channelDetail && <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>}
        </Box>
        <Box>
          <Typography variant="h4" sx={{ color : '#fff', textAlign : "center"}}>
            {/* More Videos from {channelDetail.snippet?.title}    */}
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Box>  
   )  
};

export default ChannelDetails;
