import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Item extends Component {
  constructor(){
    super()
    this.state = {
      color: 'beige'
    }
  }
  render(){
  return(
    <div style={{backgroundColor: this.state.color}}>
      <h2>{this.props.title}</h2>
      <div>
        <div>Red</div>
        <div>Yellow</div>
        <div>Blue</div>
      </div>
    </div>
  )
  }
}


class App extends Component {
  constructor(){
    super()
    this.state = {
      input: '',
      items: ['Bananas', 'Apples', 'Oranges'] 
    }
  }
  render() {
    return (
      <div className="App">
       <input type="text" value={this.state.input} />
       <button>Add Item</button>
        {this.state.items.map((item) => {
          return (
            <Item title={item}/>
          )
        })}

      </div>
    );
  }
}

export default App;
