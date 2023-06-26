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
				className="flex items-center gap-2 bg-primary-light rounded-md pl-2">
				<Tooltip title="Search with Your Voice" arrow>
					<IconButton
						sx={{
							color: "#fff",
							display: { xs: "none", md: "inline-flex" },
						}}
						className="p-2">
						<MicOutlined />
					</IconButton>
				</Tooltip>
				<input
					placeholder="search..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="bg-transparent w-full outline-none text-white md:first-letter md:min-w-[400px]"
				/>

				<Button
					type="submit"
					sx={{
						p: "8px",
						borderRadius: "0 7px 7px 0",
						color: "#fff",
						height: "100%",
						backgroundColor: "#ffffff1d !important",
					}}>
					<Search />
				</Button>
			</form>
		</div>
	);
};

export default SearchBar;
