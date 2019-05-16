import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const UnicornListItem = ({ unicorn }) => {
	const [editMode, setEditMode] = useState(false);
	const [inputName, setInputName] = useState(unicorn.name);

	const deleteUnicorn = () => {
		// skapa databas, välja collection, hämta rätt document, delete
		firebase.firestore().collection('unicorns').doc(unicorn.id).delete()
		.then(() => console.log('Borttagning genomförd'))
	}
	const saveChanges = () => {
		setEditMode(false);
		firebase.firestore().collection('unicorns').doc(unicorn.id).update({ name: inputName })
	}
	const editUnicorn = () => {
		setEditMode(true);
	}
	let maybeName = unicorn.name;
	if( editMode ) {
		maybeName = (
			<input type="text"
				value={inputName}
				onChange={e => setInputName(e.target.value)}
				onBlur={saveChanges} />
		);
	}
	return (
		<li className="unicornListItem">
			{maybeName}
			<span role="img" aria-label="Edit" onClick={editUnicorn}>✒️</span>
			<span role="img" aria-label="Delete" onClick={deleteUnicorn}>🗑️</span>
		</li>
	)
}

export default UnicornListItem;
