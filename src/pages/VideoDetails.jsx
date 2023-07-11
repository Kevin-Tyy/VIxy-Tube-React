import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Avatar, button, Typography } from "@mui/material";
import {
	CheckCircle,
	DownloadOutlined,
	SaveAlt,
	ShareOutlined,
	ThumbUpAltOutlined,
	ThumbDownAltOutlined,
} from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import TextField from "@mui/material/TextField";

import { Loader, Videos } from "../Components";
import { fetchFromAPI } from "../utils/FetchFromApi";

const VideoDetails = () => {
	const [videoDetail, setVideoDetail] = useState(null);
	const [videos, setVideos] = useState(null);
	const [channelDetails, setChannelDetails] = useState(null);
	const [comments, setComments] = useState(null);
	const [Subscribe, setSubscribe] = useState("Subscribe");
	const { id } = useParams();
	const WATCH_URL = "https://youtube.com/watch";
	
	const fetchVideoDetails = async () => {
		const { items } = await fetchFromAPI(
			`videos?part=snippet,statistics&id=${id}`
		);
		setVideoDetail(items[0])
	};
	const fetchComments = async () => {
		const { items } = await fetchFromAPI(
			`commentThreads?part=snippet&videoId=${id}&maxResults=100`
			);
		setComments(items)
	};
	const fetchChannelDetails = async () => {
		const { items } = await fetchFromAPI(
			`channels?part=snippet&id=${id}`		);
		setChannelDetails(items)
	};
	const fetchRelatedVideos = async () => {
		const { items } = await fetchFromAPI(
			`search?part=snippet&relatedToVideoId=${id}&type=video`
			);
		setVideos(items)
	};
	useEffect(() => {
		const fetchData = async () => {
			await fetchRelatedVideos();
			await fetchComments();
			await fetchChannelDetails();
			await fetchVideoDetails();
			 
		}
		fetchData();
	}, []);
	
	if (!videoDetail?.snippet) {
		return <Loader />;
	}
	console.log()
	const {
		snippet: { title, channelId, channelTitle },
		statistics: { viewCount, likeCount, commentCount },
	} = videoDetail;
	return (
		<div className="w-full">
			<div className="w-full max-w-[1500px] mx-auto flex gap-6">
				<div className="">
					<div className="w-full ">
						<ReactPlayer
							url={`${WATCH_URL}?v=${id}`}
							className="react-player"
							controls
							playing={true}
							muted={false}
						/>
						<p className="text-lg text-white my-2 font-bold">{title}</p>
					
					</div>
				</div>
				<div className="min-w-[380px]">
					<Typography variant="h6" sx={{ color: "#f9f9f9", mb: "10px" }}>
						Related Videos
					</Typography>
					<Videos
						isGrid={false}
						videos={videos}
						direction="column"
						marginRight={"100px"}
					/>
				</div>
			</div>
		</div>
	);
};

export default VideoDetails;
