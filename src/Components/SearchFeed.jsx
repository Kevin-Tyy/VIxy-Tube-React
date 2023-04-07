import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/FetchFromApi";
import { useParams} from "react-router-dom"
const SearchFeed = () => {
	const [videos, setVideos] = useState([]);

  const {searchTerm} = useParams();

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${searchTerm}&type=video`).then(
			(data) => setVideos(data.items)
		);
	}, [searchTerm]);
	return (
		<Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
			<Typography
				variant="h4"
				fontWeight="bold"
				mb={2}
				sx={{ color: "white" }}>
				Search results for:  
				<span style={{ color: "#FC1503" }}> {searchTerm}</span>
			</Typography>
			<Box sx={{ml: { sm : '100px'}}} >
				<Videos videos={videos} />

			</Box>
		</Box>
	);
};

export default SearchFeed;
