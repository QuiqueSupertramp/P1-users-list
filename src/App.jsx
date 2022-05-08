import { useEffect, useState } from 'react';
import getUsers from './services/getUsers';

function App() {
	const [first, setfirst] = useState();
	const x = async () => {
		const users = await getUsers();
		setfirst(users);
	};
	useEffect(() => {
		x();
	}, []);

	return (
		<>
			<h1>Practica 1</h1>
			{console.log(first)}
		</>
	);
}

export default App;
