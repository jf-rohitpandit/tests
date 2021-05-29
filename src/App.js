import React, { useState } from 'react';
import Card from './Card';
import './App.css';
import Navbar from './Navbar';
import Loading from './Loading';
import Cards from './Cards';

const App = () => {
	const [users, setUsers] = useState(null);
	const [loading, setLoading] = useState(false);

	return (
		<div>
			<Navbar setUsers={setUsers} setLoading={setLoading} />

			{loading ? <Loading /> : users && <Cards users={users} />}
		</div>
	);
};

export default App;
