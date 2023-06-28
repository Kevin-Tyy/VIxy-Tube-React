import React from "react";
import { Skeleton } from "@mui/material";

const VideoCard = () => {
	const numberOfLoaders = 20;
	const loaderArray = Array(numberOfLoaders).fill(null);
	return (
		<div className="flex flex-col gap-6">
			{loaderArray.map((_, index) => (
				<div
					className="bg-[#1a1b2b5d] p-4 flex flex-col gap-4 rounded-xl"
					key={index}>
					<div className="flex w-full gap-2 items-start">
						<div className="w-4/5">
							<Skeleton
								variant="rectangular"
								sx={{ bgcolor: "#1a1b2b", borderRadius: "10px" }}
								width={"100%"}
								height={"120px"}
							/>
						</div>
						<div className="w-full flex flex-col gap-2">
							<Skeleton sx={{ bgcolor: "#1a1b2b" }} />
							<div className=" flex items-center justify-center gap-2">
								<Skeleton
									variant="rounded"
									sx={{ bgcolor: "#1a1b2b", borderRadius: "50%" }}
									width="60px"
									height="50px"
								/>
								<div className="w-full">
									<Skeleton sx={{ bgcolor: "#1a1b2b" }} />
									<Skeleton sx={{ bgcolor: "#1a1b2b", maxWidth: "150px" }} />
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default VideoCard;
