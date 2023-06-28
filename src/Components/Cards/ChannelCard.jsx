import React from "react";
import { CardContent, CardMedia, Typography, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail }) => {
	return (
		<div className="flex justify-center items-center">
			<Link to={`/channel/${channelDetail?.id?.channelId}`}>
				<div className="flex flex-col justify-center items-center text-center text-white">
					<img
						src={channelDetail?.snippet?.thumbnails?.high?.url}
						alt={channelDetail?.snippet?.title}
						className="rounded-full w-[150px] h-[150px] mb-2 border border-primary-gray"
					/>
					<Typography variant="h6">
						{channelDetail.snippet?.title}
						<CheckCircle sx={{ fontSize: 13, ml: "5px" }} />
					</Typography>
					{channelDetail?.statistics?.subscriberCount && (
						<Typography color="gray">
							{parseInt(
								channelDetail.statistics?.subscriberCount
							).toLocaleString()}{" "}
							Subscribers
						</Typography>
					)}
				</div>
			</Link>
		</div>
	);
};

export default ChannelCard;
