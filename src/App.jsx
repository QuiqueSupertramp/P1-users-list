import { useEffect, useState } from 'react';
import getUsers from './services/getUsers';

function App() {
	const [first, setfirst] = useState();
	useEffect(() => {
		const users = getUsers();
		setfirst(users);
	}, []);

	return (
		<>
			<h1>Practica 1</h1>
			{console.log(first)}
		</>
	);
}

export default App;