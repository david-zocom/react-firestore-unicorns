import React from 'react';
import UnicornListItem from './UnicornListItem';

const FluffyUnicornList = props => {
	let list = null;
	if( props.list ) {
		list = props.list
		.filter(unicorn => unicorn.name.toLowerCase().includes(props.filter.toLowerCase()))
		.map(unicorn => (
			<UnicornListItem key={unicorn.id} unicorn={unicorn} />
		));
	}
	return (
		<div>
			<h1>Pink Fluffy Unicorns</h1>
			<ul className="unicornList"> {list} </ul>
		</div>
	)
};

export default FluffyUnicornList;
