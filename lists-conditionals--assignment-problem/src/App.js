import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {
  state = {
    texto: '',
    tamanhoTexto: 0
  }

  textChangeHandler = (event) => {
    const texto = event.target.value;
    const tamanhoTexto = [...texto].length;

    this.setState({
      texto: texto,
      tamanhoTexto: tamanhoTexto
    })
  }

  deleteCharHandler = (charIndex) => {
    const chars = [...this.state.texto];
    chars.splice(charIndex, 1);
    const novoTexto = chars.join('');
    this.setState({texto: novoTexto});
  }
  
  render() {
    return (
      <div className="App">
        <ol>
          <li>X Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>X Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>X Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>X Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>X Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>X When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" onChange={this.textChangeHandler} value={this.state.texto}/>
        <p>Texto: {this.state.texto}</p>

        <ValidationComponent textLength={this.state.tamanhoTexto}/>

        <div>
          {[...this.state.texto].map((letter, index) => {
            return <CharComponent 
              key={index}
              letter={letter}
              click={() => this.deleteCharHandler(index)} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
