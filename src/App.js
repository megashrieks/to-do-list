import React, { Component } from 'react';
import './App.css';

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
		list = list.map((e, i) => {
			return <li className="todo" key={i} onClick={()=>alert(e)}>{e}</li>
		});
		return (
			<div className="App">
				{list}
				<input
					type="text" value={this.state.value}
					onChange={this.changeText} />
				<button onClick={this.addItem}> Add</button>
			</div>
		);
	}
}

export default App;
