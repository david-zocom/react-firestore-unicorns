import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

import './App.css';
import FluffyUnicornList from './components/FluffyUnicornList';
// import AddFluffyUnicorn from './components/AddFluffyUnicorn';

const App = () => {
	const [fluffyUnicornData, setFluffyUnicornData] = useState(null);
	const [filterText, setFilterText] = useState('');

	useEffect(() => {
		const db = firebase.firestore();
		const unicornCollection = db.collection('unicorns');
		unicornCollection.get().then(snapshot => {
			console.log('We got some unicorns');
			let list = [];
			snapshot.forEach(doc => {
				let obj = {
					...doc.data(),
					id: doc.id
				};
				list.push(obj);
			})
			setFluffyUnicornData(list);
		})
	}, [])

	const filterChange = event => {
		setFilterText(event.target.value);
	}

	return (
		<div className="App">
		<div>
			<input type="text" value={filterText} onChange={filterChange} />
		</div>
		<FluffyUnicornList list={fluffyUnicornData} filter={filterText} />

		<div>
			<input type="text" placeholder="document id"
			id="inputDocId" />
			<button id="fetchDocButton">Hämta dokument</button>
			<p id="docContent">
			Dokumentet ska visas här!
			</p>
		</div>
		</div>
	);
}

export default App;
