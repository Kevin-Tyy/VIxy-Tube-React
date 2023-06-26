import React from "react";
import { Box, IconButton, Avatar, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import {
	NotificationsNoneOutlined,
	Add,
	YouTube,
} from "@mui/icons-material";
const Navbar = () => (
	<div className="flex items-center justify-between w-full p-4">
		<Link to="/" className="gap-2 hidden md:flex">
			<YouTube fontSize="large" className="text-primary-red" />
			<Typography variant="h6" sx={{color : 'white'}}>
				You<span className="text-primary-red">Tube</span>
			</Typography>
		</Link>

		<SearchBar />
		<div
		className="flex items-center gap-4"
			>
			<Tooltip title="Create" arrow>
				<IconButton
					sx={{
						color: "#fff",
						display: { xs: "none", md: "inline-flex" },
					}}
					className="icon-button">
					<Add />
				</IconButton>
			</Tooltip>
			<Tooltip title="Notifications" arrow>
				<IconButton
					sx={{
						color: "#fff",
						display: { xs: "none", md: "inline-flex" },
					}}
					className="icon-button">
					<NotificationsNoneOutlined />
				</IconButton>
			</Tooltip>
			<Tooltip title="John Doe" arrow>
				<IconButton sx={{ color: "#fff" }}>
					<Avatar sx={{ width: 35, height: 35 }}> J </Avatar>
				</IconButton>
			</Tooltip>
		</div>
	</div>
);

export default Navbar;
