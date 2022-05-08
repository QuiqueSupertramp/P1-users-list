const getUsers = async () => {
	const res = await fetch(
		'https://my-json-server.typicode.com/QuiqueSupertramp/P1-users-list'
	);
	console.log('res', res);
	const data = res.json();
	console.log('data', data);
	return data;
};

export default getUsers;
