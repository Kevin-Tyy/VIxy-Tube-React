import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
	Navbar,
	ChannelDetails,
	VideoDetails,
	Feed,
	SearchFeed,
} from "./Components";
const App = () => (
	<BrowserRouter>
		<div className="min-h-screen bg-primary-dark w-full">
			<Navbar />
			<Routes>
				<Route path="/" exact element={<Feed />} />
				<Route path="/video/:id" element={<VideoDetails />} />
				<Route path="/channel/:id" element={<ChannelDetails />} />
				<Route path="/search/:searchTerm" element={<SearchFeed />} />
			</Routes>
		</div>
	</BrowserRouter>
);
export default App;
