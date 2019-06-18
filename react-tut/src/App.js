import React, { Component } from 'react';
import Ninjas from './ninjas.js'
import AddNinja from './addNinja.js'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Joe', age: '20', belt: 'Blue', id: 1 },
      { name: 'Bob', age: '42', belt: 'Black', id: 2 },
      { name: 'Fred', age: '18', belt: 'Brown', id: 3 },
      { name: 'Bonnie', age: '7', belt: 'Yellow', id: 4 },
      { name: 'Clyde', age: '34', belt: 'White', id: 5 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    })
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Ninjas</p>
        <AddNinja addNinja={this.addNinja}/>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
      </div>
    );
  }
}
export default App;
