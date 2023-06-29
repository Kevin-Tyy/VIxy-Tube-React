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
	const [comments, setComments] = useState([]);
	const [Subscribe, setSubscribe] = useState("Subscribe");
	const { id } = useParams();
	const WATCH_URL = "https://youtube.com/watch";

	useEffect(() => {
		fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
			setVideoDetail(data.items[0])
		);

		fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
			(data) => setVideos(data.items)
		);
		fetchFromAPI(
			`commentThreads?part=snippet&videoId=${id}&maxResults=100`
		).then((data) => setComments(data.items));
	}, []);

	if (!videoDetail?.snippet) {
		return <Loader />;
	}
	console.log(comments);
	const {
		snippet: { title, channelId, channelTitle },
		statistics: { viewCount, likeCount, commentCount },
	} = videoDetail;

	return (
		<div className="w-full">
			<div className="w-full max-w-[1500px] mx-auto flex gap-6">
				<div className="">
					<div className="w-full">
						<ReactPlayer
							url={`${WATCH_URL}?v=${id}`}
							className="react-player"
							controls
							playing={true}
							muted={false}
						/>
						<p className="text-lg text-white my-2 font-bold">{title}</p>
						<div>
							<div>
								<Link to={`/channel/${channelId}`}>
									<Typography variant={{ sm: "body2", md: "h6" }} color="#fff">
										{channelTitle}
										<CheckCircle
											sx={{
												fontSize: "12px",
												color: "gray",
												ml: "5px",
												mr: "20px",
											}}
										/>
									</Typography>
								</Link>
								<button
									onClick={() => {
										setSubscribe("Subscribed");
									}}
									className="video-detail-btns">
									{Subscribe}
								</button>
							</div>

							<div direction={"row"} gap="10px" alignItems="center">
								<div>
									<Tooltip title="I like this" arrow>
										<button>
											<ThumbUpAltOutlined fontSize="small" />
											<Typography variant="body2" sx={{ opacity: 0.7 }}>
												{parseInt(likeCount).toLocaleString()}
											</Typography>
										</button>
									</Tooltip>
									<Tooltip title="I dislike this" arrow>
										<button>
											<ThumbDownAltOutlined fontSize="small" />
										</button>
									</Tooltip>
								</div>
								<Tooltip title="Share" arrow>
									<button>
										<ShareOutlined fontSize="small" />
										<Typography
											variant="body2"
											sx={{
												opacity: 0.7,
												display: { xs: "none", md: "block" },
											}}>
											Share
										</Typography>
									</button>
								</Tooltip>
								<Tooltip title="Download" arrow>
									<button>
										<DownloadOutlined fontSize="small" />

										<Typography
											variant="body2"
											sx={{
												opacity: 0.7,
												display: { xs: "none", md: "block" },
											}}>
											Download
										</Typography>
									</button>
								</Tooltip>
								<Tooltip title="Save" arrow>
									<button>
										<SaveAlt fontSize="small" />
										&nbsp;&nbsp;
										<Typography variant="body2">Save</Typography>
									</button>
								</Tooltip>
								<Tooltip title="more" arrow>
									<button>
										<MoreHorizIcon />
									</button>
								</Tooltip>
							</div>
						</div>

						<Accordion
							sx={{
								backgroundColor: "#ffffff1d",
								color: "#fff",
								borderRadius: "10px",
								my: "20px",
								py: "10px",
							}}>
							<AccordionSummary
								expandIcon={
									<ExpandMoreIcon
										sx={{ color: "#fff", height: "50px", pb: "10px" }}
									/>
								}>
								<Typography sx={{ mr: "20px" }}>
									{parseInt(viewCount).toLocaleString()} views
								</Typography>
								<Typography>Feb 15, 2023</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Doloribus qui, impedit dolorum reprehenderit id hic voluptatem
									harum omnis minima quos labore autem perferendis consectetur
									incidunt beatae aspernatur! Dolor, sunt ratione eveniet labore
									porro quibusdam dolorem totam harum facilis velit modi
									veritatis perferendis ad dolores adipisci nemo eum iste iure
									explicabo est saepe. Dicta sed voluptas voluptates esse
									repudiandae et deserunt.
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Typography sx={{ color: "#fff" }}>
							{commentCount} Comments
						</Typography>

						<div>
							<div sx={{ display: "flex", alignItems: "center", width: "85%" }}>
								<Avatar sx={{ mr: "10px" }}>J</Avatar>
								<TextField
									id="input-with-sx"
									label="Add your comment"
									variant="standard"
									sx={{
										my: "20px",
										py: "10px",
										width: "100% !important",
										input: { color: "white" },
										label: { color: "white" },
									}}
									InputLabelProps={{
										sx: {
											color: "red",
											"&.Mui-focused": {
												color: "white",
											},
										},
									}}
								/>
							</div>
							<div sx={{ width: "300px" }}>
								<button
									sx={{
										mr: "10px",
										width: "45%",
										borderRadius: "10px !important",
										minWidth: "60px",
									}}
									className="video-detail-btns">
									Cancel
								</button>
								<button
									sx={{
										width: "45%",
										borderRadius: "10px !important",
										whiteSpace: "nowrap",
										minWidth: "60px",
									}}
									className="video-detail-btns">
									Send Comment
								</button>
							</div>
						</div>
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
