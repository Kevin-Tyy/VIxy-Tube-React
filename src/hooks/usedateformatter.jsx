export const options = {
	year: "numeric",
	month: "short",
	day: "numeric",
};
const useDateFormatter = (date) => {
	const formattedDate = new Date(date).toLocaleString("en-US", options);
	return formattedDate;
};
export default useDateFormatter;
