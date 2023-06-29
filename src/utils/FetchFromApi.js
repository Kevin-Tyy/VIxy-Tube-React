import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
	params: {
		maxResults: "50",
	},
	headers: {
		"X-RapidAPI-Key": "4e398042e3msh659ac940dbb6dcap1d7a79jsndddf05ac940b",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	return data;
};
