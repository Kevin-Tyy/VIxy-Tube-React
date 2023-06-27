import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { fetchFromAPI } from "../../utils/FetchFromApi";

const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	const [channel, setChannel] = useState(null);
	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&id=${snippet?.channelId}`).then(
			(data) => {
				setChannel(data);
			}
		);
	}, []);
	console.log(channel);
	return (
		<div className="bg-transparent overflow-hidden w-full">
			<div className="w-full rounded-xl h-[180px] overflow-hidden">
				<Link to={`/video/${videoId}`}>
					<img
						src={snippet?.thumbnails?.high?.url}
						alt={snippet?.title}
						className=" h-full w-full object-cover transition duration-300 scale-125 hover:scale-150"
					/>
				</Link>
			</div>
			<div>
				<div className="flex ">
					<div>
						<Link to={`/channel/${snippet?.channelId}`}>
							<img
								src={channel?.items[0]?.snippet?.thumbnails?.high?.url}
								className="h-10 w-10"
							/>
						</Link>
					</div>

					<div sx={{ width: "85%" }}>
						<Link to={`/video/${videoId}`}>
							<Typography
								variant="subtitle1"
								fontWeight="bold"
								color="#fff"
								fontSize="12px">
								{snippet?.title.slice(0, 100)}
							</Typography>
						</Link>
						<Link to={`/channel/${snippet?.channelId}`}>
							<Typography
								variant="subtitle2"
								fontWeight="bold"
								color="gray"
								fontSize="11px">
								{snippet?.channelTitle}
								<CheckCircle sx={{ fontSize: 12, ml: "5px" }} />
							</Typography>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
