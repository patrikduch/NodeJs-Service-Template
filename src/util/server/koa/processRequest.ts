const getItems = () => {
	return new Promise((resolve: any, reject: any) => {
		setTimeout(() => {
			resolve(['Mobile', 'Mac', 'Pen']);
		}, 1000);
	});
};

const processRequest = async () => {
	const items = await getItems();
	return items;
};
