import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

import './App.css';
import FluffyUnicornList from './components/FluffyUnicornList';
import SingleUnicorn from './components/SingleUnicorn';
import AddUnicorn from './components/AddUnicorn';

const App = () => {
	const [fluffyUnicornData, setFluffyUnicornData] = useState(null);
	const [filterText, setFilterText] = useState('');

	useEffect(() => {
		const db = firebase.firestore();
		const unicornCollection = db.collection('unicorns');
		unicornCollection.onSnapshot(snapshot => {
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

		<AddUnicorn />

		<SingleUnicorn />


		<div>TODO uppdatera listan så att man kan ändra och ta bort</div>
		</div>
	);
}

export default App;
