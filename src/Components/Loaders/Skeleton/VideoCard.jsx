import React from "react";
import Skeleton from '@mui/material'

const VideoCard = () => {
	const numberOfLoaders = 40;
	const loaderArray = Array(numberOfLoaders).fill(null);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 p-4 md:p-12 gap-6">
			{loaderArray.map((_, index) => (
				<div
					className="bg-[#1a1b2b9d] p-4 flex flex-col gap-4 rounded-lg"
					key={index}>
					<div className="flex w-full gap-4">
						<Skeleton circle width={100} height={100} />
						<div className="w-full flex flex-col gap-2">
							<Skeleton />
							<Skeleton />
							<Skeleton height={50} />
						</div>
					</div>
					<Skeleton />
				</div>
			))}
		</div>
	);
};

export default VideoCard;
