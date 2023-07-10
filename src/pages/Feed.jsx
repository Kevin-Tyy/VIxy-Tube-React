import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "../Components";
import { fetchFromAPI } from "../utils/FetchFromApi";

const Feed = () => {
	const [selectedCategory, setSelectdeCategory] = useState("Trending");
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchFromAPI(
			`search?part=snippet&q=${selectedCategory}&type=video,channel`
		).then((data) => setVideos(data.items));
	}, [selectedCategory]);
	return (
		<div className="flex flex-col gap-2">
			<div>
				<Sidebar
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectdeCategory}></Sidebar>
			</div>
			<div className="w-full flex flex-col py-3 gap-4">
				<div className="flex w-full justify-center items-center">
					<Typography
						variant="h6"
						fontWeight="bold"
						mb={2}
						sx={{ color: "white", textAlign: 'center' }}>
						{selectedCategory}

						<span className="text-primary-red"> Videos</span>
					</Typography>
				</div>
				<Videos isGrid={true} videos={videos} />
			</div>
		</div>
	);
};

export default Feed;
