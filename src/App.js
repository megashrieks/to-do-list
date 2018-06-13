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
			value: '',
			selected: []
		}
		this.maxId = -1;
		this.storage.list.forEach((e, i) => {
			this.maxId = Math.max(this.maxId, e.id)
		});
		++this.maxId;
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
		let list = [...this.state.list, {
			name: this.state.value,
			id:this.maxId
		}];
		this.storageFunctions.modify("list", list);
		this.setState({
			list: list,
			value: ''
		});
	}
	changeText = ({ target: { value } }) => {
		this.setState({ value: value })
	}
	toggleSelected = (id, value) => {
		let selected = this.state.selected;
		if (value) {
			selected.push(id);
			this.setState({
				selected: selected
			});
		}
		else {
			let index = selected.indexOf(id);
			selected.splice(index,1);
			this.setState({
				selected:selected
			})
		}
	}
	render() {
		let list = this.state.list;
		return (
			<div className="App">
				{list.map((e, i) => {
					return <ListItem
						key={i}
						name={e.name}
						id={e.id}
						toggleSelected={this.toggleSelected}/>;
				})}
				{!!this.state.selected.length && <div className="indicator">
					{(this.state.selected.length + " selected")}
				</div>}
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
