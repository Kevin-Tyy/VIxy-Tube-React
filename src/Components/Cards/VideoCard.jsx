import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { fetchFromAPI } from "../../utils/FetchFromApi";
import useDateFormatter from "../../hooks/usedateformatter";
import useViewCountFormatter from '../../hooks/useViewCount'
const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
	isGrid,
}) => {
	const [videoData, setVideoData] = useState(null)
	const formattedDate = useDateFormatter(snippet?.publishedAt);
	let viewCount;
	if (videoData) {
		viewCount = useViewCountFormatter(videoData)
	}
	const clipText = (text) => {
		const words = text.split(' ');

		const clippedText = words.slice(0, 10).join(' ');

		if (words.length > 10) {
			return clippedText + '...';
		}

		return clippedText;
	}
	const fetchVideoDetails = async () => {
		const { items } = await fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
		setVideoData(items)
	}
	useEffect(() => {
		fetchVideoDetails();
	}, []);
	const videoTitle = clipText(snippet?.title);
	console.log(videoData?.statistics?.viewCount)
	return (
		<div
			className={`bg-transparent overflow-hidden w-full flex ${isGrid ? "flex-col" : "flex-row"
				} gap-3`}>
			<div
				className={`w-full rounded-xl ${isGrid ? "h-[160px]" : "h-[110px] min-w-[200px] max-w-[200px]"
					} overflow-hidden`}>
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
					{isGrid && (
						<div className="h-9 w-9 rounded-full overflow-hidden">
							<Link to={`/channel/${snippet?.channelId}`}>
								<img
									src={snippet?.thumbnails?.high?.url}
									className="h-full w-full object-cover scale-150"
								/>
							</Link>
						</div>
					)}

					<div className={`w-full flex flex-col gap-1`}>
						<Link to={`/video/${videoId}`}>
							<p className="text-white text-xs" title={snippet?.title}>
								{videoTitle}
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
						<div className="flex">

							<p className="text-xs text-neutral-400">{formattedDate}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
