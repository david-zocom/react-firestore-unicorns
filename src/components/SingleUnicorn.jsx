import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const SingleUnicorn = () => {
	const [doc, setDoc] = useState(null);
	const [inputId, setInputId] = useState('');

	const fetchDoc = () => {
		console.log('Hämta dokumentet med id=' + inputId);
		firebase.firestore().collection('unicorns').doc(inputId).get()
		.then(doc => {
			// Vi kan komma åt id genom doc.id
			if( doc.exists )
				setDoc(doc.data());
			else
				setDoc(null);
		})
		.catch(error => { console.log('Något gick fel när vi försökte hämta ett dokument!') })
	}

	let content = 'Det finns inget dokument!';
	if( doc ) {
		content = `Hittade dokumentet: ${doc.name}`;
	}
	return (
		<div>
			<input type="text"
			 	placeholder="document id"
				value={inputId}
				onChange={e => setInputId(e.target.value)} />
			<button onClick={fetchDoc}>Hämta dokument</button>
			<p> {content} </p>
		</div>
	)
};

export default SingleUnicorn;
