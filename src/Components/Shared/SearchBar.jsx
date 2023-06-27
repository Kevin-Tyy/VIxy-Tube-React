import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Button, IconButton, Box, Tooltip } from "@mui/material";
import { MicOutlined, Search } from "@mui/icons-material";
const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchTerm) {
			navigate(`/search/${searchTerm}`);
			setSearchTerm("");
		}
	};
	return (
		<div className="flex gap-2 items-center">
			<form
				onSubmit={handleSubmit}
				className="flex items-center gap-1 bg-primary-light rounded-md ">
				<Tooltip title="Search with Your Voice" arrow>
					<IconButton
						sx={{
							color: "#fff",
						}}>
						<MicOutlined />
					</IconButton>
				</Tooltip>
				<input
					placeholder="search..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="bg-transparent w-full outline-none text-white md:first-letter md:min-w-[400px]"
				/>
				<button className="text-white">
					<IconButton sx={{ color: "white" }} className="p-1">
						<Search />
					</IconButton>
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
