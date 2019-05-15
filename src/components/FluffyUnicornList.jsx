import React from 'react';

const FluffyUnicornList = props => {
	let list = null;
	if( props.list ) {
		list = props.list
		.filter(unicorn => unicorn.name.toLowerCase().includes(props.filter.toLowerCase()))
		.map(unicorn => (
			<li key={unicorn.id}>{unicorn.name}</li>
		));
	}
	return (
		<div>
			<h1>Pink Fluffy Unicorns</h1>
			<ul> {list} </ul>
		</div>
	)
};

export default FluffyUnicornList;
