import React from "react";
import { Skeleton } from "@mui/material";

const VideoCard = () => {
	const numberOfLoaders = 40;
	const loaderArray = Array(numberOfLoaders).fill(null);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 px-4 md:px-12 gap-6">
			{loaderArray.map((_, index) => (
				<div
					className="bg-[#1a1b2b5d] p-4 flex flex-col gap-4 rounded-lg"
					key={index}>
					<div className="flex flex-col w-full gap-2">
						<div>
							<Skeleton
								variant="rectangular"
								sx={{ bgcolor: "#1a1b2b" }}
								width={"100%"}
								height={"200px"}
							/>
						</div>
						<div className="w-full flex items-center justify-center gap-2">
							<Skeleton
								variant="rounded"
								sx={{ bgcolor: "#1a1b2b", borderRadius: "50%" }}
								width="60px"
								height="50px"
							/>
							<div className="w-full">
								<Skeleton sx={{ bgcolor: "#1a1b2b" }} />
								<Skeleton sx={{ bgcolor: "#1a1b2b" }} />
							</div>
						</div>
						<Skeleton sx={{ bgcolor: "#1a1b2b" }} />
					</div>
				</div>
			))}
		</div>
	);
};

export default VideoCard;
