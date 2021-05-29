import React from 'react';

const Card = ({ avatar, first_name, last_name, email }) => {
	return (
		<div className='card'>
			<img src={avatar} alt='avatar' />
			<div className='info'>
				<h2>
					{first_name} {last_name}
				</h2>
				<h4>{email}</h4>
			</div>
		</div>
	);
};

export default Card;
