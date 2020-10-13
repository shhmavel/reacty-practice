import React, { Component } from 'react';
import './App.css';
import './ValidationComponent'
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: "",
      charList: []
    }
  }
  showChange = (value) => {
    console.log("value ", this.state.charList)
    this.setState({ inputValue: value.length })
    this.setState({ charList: value.split("")})

  }

  removeItem = (item) => {
    console.log(" removed that bitch ", item)
    let charList = this.state.charList;
    delete charList[item];
    this.setState({ charList })

  }
  

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input onChange={ e => {
          this.showChange( e.target.value);
        }}></input>
        <ValidationComponent inputValue={this.state.inputValue}></ValidationComponent>
        <ul>
          {this.state.charList.map((option, i) => (
              <CharComponent onClick={this.removeItem} key={i} character={option} index={i}></CharComponent>
          ))}
        </ul>
        
      </div>
    );
  }
}

export default App;
