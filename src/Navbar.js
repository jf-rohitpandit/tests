import React from 'react';
import axios from 'axios';

const Navbar = ({ setUsers, setLoading }) => {
	const getUsers = async () => {
		setLoading(true);
		const data = await axios.get('https://reqres.in/api/users?page=1');
		setUsers(data.data.data);
		console.log(data.data.data);
		setLoading(false);
	};
	return (
		<div className='navbar'>
			<img src='./logo512.png' alt='' className='logoImg' />
			<button onClick={getUsers}>Get users</button>
		</div>
	);
};

export default Navbar;
