import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

class AddUnicorn extends React.Component {
	state = {
		unicornName: ''
	}
	handleChangeInput = e => {
		this.setState({ unicornName: e.target.value });
	}
	handleClickAdd = e => {
		let obj = { name: this.state.unicornName };
		const collectionRef = firebase.firestore().collection('unicorns');
		collectionRef.add(obj)
		.then(() => {
			console.log('Added unicorn!');
			// uppdatera listan över dokument - görs med .onSnapshot istället för .get i App-komponenten
		})
		.catch(error => {
			console.log('Could not add unicorn!');
		})
	}
	render() {
		return (
			<div>
			Lägg till ett nytt element: <br/>
			<input type="text" value={this.state.unicornName}
			 	onChange={this.handleChangeInput} />
			<button onClick={this.handleClickAdd}>Lägg till</button>
			</div>
		)
	}
}

export default AddUnicorn;
