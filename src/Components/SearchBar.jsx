import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Button } from "@mui/material";
import { Search } from "@mui/icons-material";
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
		<Paper
			component="form"
			onSubmit={handleSubmit}
			sx={{
				borderRadius: 50,
				border: "1px solid rgb(87, 87, 87)",
				pl: 2,
				boxShadow: "none",
				mr: { sm: 5 },
				backgroundColor: '#000'
			}}>
			
        <input
          className="search-bar"
          placeholder="search..."
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
		  style={{fontSize : '15px', color: 'white'}}
        />

        <Button type="submit" sx={{p : '10px', borderRadius : '0 50px 50px 0' }} >
          <Search/>
        </Button>
				
		</Paper>
	);
};

export default SearchBar;
