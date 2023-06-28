import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, Playlist, Loader } from "./";
import VideoCardLoader from "./Loaders/Skeleton/VideoCard";
import CardLoader from "./Loaders/Skeleton/Cardloader";
const Videos = ({ videos, isGrid }) => {
	if (!videos?.length) {
		if (isGrid) {
			return <VideoCardLoader />;
		} else {
			return <CardLoader />;
		}
	}

	return (
		<div className="flex justify-center ">
			<div
				className={`${
					isGrid
						? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 p-4 md:p-12 gap-10"
						: "flex flex-col gap-6"
				} `}>
				{videos.map((item, index) => (
					<Box key={index}>
						{item.id.videoId && <VideoCard video={item} isGrid={isGrid}/>}
						{item.id.channelId && <ChannelCard channelDetail={item} />}
						{item.id.playlistId && <Playlist playlist={item} />}
					</Box>
				))}
			</div>
		</div>
	);
};

export default Videos;
