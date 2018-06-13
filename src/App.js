import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    list: [
      "do something"
    ],
    value:''
  }
  render() {
    console.log(this.state.list);
    let list = [];
    this.state.list.forEach((e, i) => {
      list.push(<li className="todo" key={i} onClick={()=>alert(e)}>{e}</li>)
    });
    return (
      <div className="App">
        {list}
        <input type="text" value={this.state.value} onChange={
          ({ target: { value } }) => {
            this.setState({ value: value })
          }} />
        <button onClick={
          () => {
            this.setState(prevState => ({
              list: [...prevState.list, prevState.value],
              value:''
            }))
          }
        }> Add</button>
      </div>
    );
  }
}

export default App;
