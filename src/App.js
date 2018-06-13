import React, { Component } from 'react';
import './App.css';
import ListItem from './components/ListItem/ListItem';
import StorageStructure from './StorageStructure';
class App extends Component {

	constructor(props) {
		super(props);
		this.storage = JSON.parse(
			localStorage.getItem("todo-items") ||
			JSON.stringify(StorageStructure)
		);
		if (this.storage.version !== StorageStructure.version)
			this.storage = this.wipeStorage();
		this.state = {
			list: this.storage.list,
			value:''
		}
	}
	wipeStorage = () => {
		localStorage.setItem("todo-items",
			JSON.stringify(
				StorageStructure
			)
		);
		return StorageStructure;
	}
	storageFunctions = {
		getObject:function() {
			return JSON.parse(localStorage.getItem("todo-items"))
		},
		setObject: function (object) {
			localStorage.setItem("todo-items",
				JSON.stringify(
					object
				)
			);
		},
		modify: function(type, value){
			let currentObject = this.getObject();
			currentObject[type] = value;
			this.setObject(currentObject);
		}
	}
	addItem = () => {
		let list = [...this.state.list, this.state.value];
		this.storageFunctions.modify("list", list);
		this.setState({
			list: list,
			value: ''
		});
	}
	changeText = ({ target: { value } }) => {
		this.setState({ value: value })
	}
	render() {
		let list = this.state.list;
		return (
			<div className="App">
				{list.map((e, i) => {
					return <ListItem key={i} name={e} />;
				})}
				<input
					type="text"
					value={this.state.value}
					onChange={this.changeText} />
				<button onClick={this.addItem}> Add</button>
			</div>
		);
	}
}

export default App;
