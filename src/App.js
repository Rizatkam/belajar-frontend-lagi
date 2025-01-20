import React, { Component } from 'react';
import './App.css';
/*import Greeting from './Greeting';
import InputName from './InputName';
import InputAge from './InputAge';

class App extends Component {
state = {
persons: [
{name: 'Michael', age: 19}
]
}
changePersonHandler = (newName,newAge) => {
this.setState({
persons: [
{name: 'Anne', age: '24' }
]
})
}
changeNameHandler=(event)=>{
  this.setState({
persons:[
  {name:event.target.value, age:this.state.persons[0].age}
]
  })
}
changeAgeHandler=(event)=>{
  this.setState({
persons:[
  {name:this.state.persons[0].name, age:event.target.value}
]
  })
}
render() {
return (
<div className="App">
<h1>Greeting from React App</h1>
<InputName name={this.state.persons[0].name} changeName={this.changeNameHandler}/>
<InputAge age={this.state.persons[0].age} changeAge={this.changeAgeHandler}/>
<Greeting name={this.state.persons[0].name} age={this.state.persons[0].age} clickParagraph={this.changePersonHandler}/>
</div>
);
}
}*/

class App extends Component {
  state = {
  showList: false,
  data: [
  { name: "maria", age: 23 },
  { name: "romi", age: 22 }
  ]
  }
  HandleConditional = () => {
  this.setState({ showList: !this.state.showList })
  }
  render() {
  return (
  <div>
  <button onCLick={this.HandleConditional}>Show
  </button>
  {this.state.showList === true ?
  <div>
  <p>{this.state.data[0].name} -
  {this.state.data[0].age}</p>
  <p>{this.state.data[1].name} -
  {this.state.data[1].age}</p>
  </div>
  : ''}
  </div>
  )
  }
  }
export default App