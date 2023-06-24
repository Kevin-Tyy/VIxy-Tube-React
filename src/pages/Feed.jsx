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
		<div>
			<div>
				<Sidebar
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectdeCategory}></Sidebar>
			</div>
			<div>
				<Typography
					variant="h6"
					fontWeight="bold"
					mb={2}
					sx={{ color: "white" }}>
					{selectedCategory}

					<span style={{ color: "#1b37b4" }}> Videos</span>
				</Typography>

				<Videos videos={videos} />
			</div>
		</div>
	);
};

export default Feed;
