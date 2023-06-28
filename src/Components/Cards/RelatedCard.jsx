import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { fetchFromAPI } from "../../utils/FetchFromApi";
import useDateFormatter from "../../hooks/usedateformatter";
const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	const formattedDate = useDateFormatter(snippet?.publishedAt);
	useEffect(() => {
		fetchFromAPI(``)
	}, []);
	return (
		<div className="bg-transparent overflow-hidden w-full flex flex-col gap-3">
			<div className="w-full rounded-xl h-[180px] overflow-hidden">
				<Link to={`/video/${videoId}`}>
					<img
						src={snippet?.thumbnails?.high?.url}
						alt={snippet?.title}
						className=" h-full w-full object-cover transition duration-300 scale-125 hover:scale-[1.35]"
					/>
				</Link>
			</div>
			<div>
				<div className="flex gap-4">
					<div className="h-9 w-9 rounded-full overflow-hidden">
						<Link to={`/channel/${snippet?.channelId}`}>
							<img
								src={snippet?.thumbnails?.high?.url}
								className="h-full w-full object-cover scale-150"
							/>
						</Link>
					</div>

					<div className="w-full flex flex-col gap-2">
						<Link to={`/video/${videoId}`}>
							<p className="text-white text-sm">
								{snippet?.title.slice(0, 100)}
							</p>
						</Link>
						<Link
							to={`/channel/${snippet?.channelId}`}
							className="flex gap-2 text-white">
							<Typography
								variant="subtitle2"
								fontWeight="bold"
								color="gray"
								fontSize="11px">
								{snippet?.channelTitle}
							</Typography>
							<CheckCircle sx={{ fontSize: 13 }} />
						</Link>
						<p className="text-xs text-gray-600">{formattedDate}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
