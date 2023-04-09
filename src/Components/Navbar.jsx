import React from "react";
import { Stack, Box, IconButton, Avatar, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import { NotificationsNoneOutlined } from "@mui/icons-material";
const Navbar = () => (
	<Stack
		direction="row"
		alignItems="center"
		p={0.7}
		sx={{
			position: "sticky",
			backgroundColor: "#000",
			top: 0,
			justifyContent: "space-between",
			zIndex: 999
		}}>
      <Link to="/" style={{display: "flex", alignItems : "center"}}>
        <img src={logo} alt="logo" height={40}/>
      </Link>

      <SearchBar/>
	  <Box sx={{display : 'flex' , alignItems : 'center' , justifyContent: 'center'}}>
		<Tooltip title="Notifications" arrow >
			<IconButton  sx={{color : '#fff' , backgroundColor : '#ffffff1d' }} className="icon-button">
				<NotificationsNoneOutlined/>

			</IconButton>

		</Tooltip>
		<Tooltip title="John Doe" arrow>
			<IconButton sx={{color : '#fff' }}>
				<Avatar>J</Avatar>

			</IconButton>

		</Tooltip>

	  </Box>
    </Stack>
);

export default Navbar;
