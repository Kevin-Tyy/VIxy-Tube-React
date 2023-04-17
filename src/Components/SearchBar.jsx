import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Button, IconButton, Box, Tooltip } from "@mui/material";
import { MicOutlined, Search } from "@mui/icons-material";
const SearchBar = () => {

	const [searchTerm , setSearchTerm] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		if(searchTerm){
			navigate(`/search/${searchTerm}`);

			setSearchTerm('');
		}
	}
	return (
		<Box sx={{ display : 'flex' , alignItems : 'center' , justifyContent : 'center'}}>
		<Paper
			component="form"
			onSubmit={handleSubmit}
			sx={{
				borderRadius: '50px',
				border: "1px solid #ffffff3d",
				pl: 2,
				boxShadow: "none",
				mr: { sm: 5 },
				backgroundColor: 'transparent',
				height: "40px",
				width: '500px'
			}}>
			
        <input
          className="search-bar"
          placeholder="search..."
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
		  style={{fontSize : '12px', color: 'white'}}
        />

			<Button type="submit" sx={{p : '10px', borderRadius : '0 50px 50px 0' ,color : '#ffffff4d' ,height : '100%', backgroundColor : '#ffffff2d !important'}} >
				<Search/>
			</Button>
		</Paper>
		<Tooltip title="Search with Your Voice" arrow>

			<IconButton sx={{color : '#fff' , backgroundColor : '#ffffff1d' ,ml:'-20px'}} className="icon-button">
				<MicOutlined />

			</IconButton>
		</Tooltip>
		</Box>
	);
};

export default SearchBar;
