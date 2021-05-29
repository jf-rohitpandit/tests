import React from 'react';
import Card from './Card';

const Cards = ({ users }) => {
	return (
		<div className='cards'>
			{users.map((user) => (
				<Card
					key={user.id}
					avatar={user.avatar}
					first_name={user.first_name}
					last_name={user.last_name}
					email={user.email}
				/>
			))}
		</div>
	);
};

export default Cards;
