import React from 'react';
import spinner from './ZZ5H.gif';

const Loading = () => {
	return (
		<div>
			{console.log('Loading')}
			<img src={spinner} alt='' className='spinner' />
		</div>
	);
};

export default Loading;
