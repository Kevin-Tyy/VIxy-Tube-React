import React from "react";
import { categories } from "../../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
	return (
		<div className="w-full flex flex-row overflow-x-scroll gap-6 p-4 bg-primary-light">
			{categories.map((category) => (
				<button
					onClick={() => setSelectedCategory(category.name)}
					className={`flex flex-col px-10 py-4 items-center justify-center whitespace-nowrap text-white rounded-md transition duration-75 ${
						category.name == selectedCategory ? "bg-primary-red" : "bg-primary-dark "
					}`}
					key={category.name}>
					<span
						className={`flex whitespace-nowrap text-white
						`}>
						{category.icon}
					</span>
					<span
						className={`opacity-${
							category.name == selectedCategory ? "100" : "80"
						}`}>
						{category.name}
					</span>
				</button>
			))}
		</div>
	);
};

export default Sidebar;
