export const getFirstName = data => {
	return data[0].name;
};

export const getAllFirstNames = data => {
	const nameArr = [];
	data.forEach(element => {
		nameArr.push(element.name);
	});
	return nameArr;
};
