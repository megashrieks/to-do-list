import React, { Component } from 'react';
import './App.css';
import ListItem from './components/ListItem/ListItem';

class App extends Component {
	state = {
		list: [
			"do something"
		],
		value:''
	}
	addItem = () => {
		this.setState(prevState => ({
			list: [...prevState.list, prevState.value],
			value: ''
		}))
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
					type="text" value={this.state.value}
					onChange={this.changeText} />
				<button onClick={this.addItem}> Add</button>
			</div>
		);
	}
}

export default App;
