import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
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
		<div className="p-2 overflow-auto">
			<Typography
				variant="h6"
				fontWeight="bold"
				mb={2}
				sx={{
					color: "white",
					display: "flex",
					justifyContent: "center",
				}}>
				Videos for:
				<span className="text-primary-red first-letter:capitalize">
					{searchTerm}
				</span>
			</Typography>
			<div sx={{ ml: { sm: "10px" } }}>
				<Videos isGrid={true} videos={videos} />
			</div>
		</div>
	);
};

export default SearchFeed;
