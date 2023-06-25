import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	return (
		<div className="bg-transparent overflow-hidden w-full">
			<div className="rounded-xl w-full h-[150px]">
				<Link to={`/video/${videoId}`}>
					<img
						src={snippet?.thumbnails?.high?.url}
						alt={snippet?.title}
						className=" h-full w-full object-cover"
					/>
				</Link>
			</div>
			<div>
				<div className="flex ">
					<div>
						<Link to={`/channel/${snippet?.channelId}`}>
							<img
								src={snippet?.thumbnails?.high?.url}
								width={"40px"}
								height={"40px"}
								style={{ objectFit: "cover", transform: "scale(1.3)" }}
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
