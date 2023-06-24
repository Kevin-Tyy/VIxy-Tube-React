import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../Components";
import { fetchFromAPI } from "../utils/FetchFromApi";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
	const [videos, setVideos] = useState([]);

	const { searchTerm } = useParams();

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${searchTerm}&type=video`).then(
			(data) => setVideos(data.items)
		);
	}, [searchTerm]);
	return (
		<Box p={2} sx={{ overflowY: "auto", height: "93vh", flex: 1 }}>
			<Typography
				variant="h6"
				fontWeight="bold"
				mb={2}
				sx={{
					color: "white",
					my: "30px",
					display: "flex",
					justifyContent: "center",
				}}>
				Search results for:
				<span style={{ color: "#1b37b4" }}> {searchTerm}</span>
			</Typography>
			<Box sx={{ ml: { sm: "10px" } }}>
				<Videos videos={videos} />
			</Box>
		</Box>
	);
};

export default SearchFeed;
