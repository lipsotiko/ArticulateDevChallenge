import React, { Component } from 'react';
import './App.css';
import Flashcard from './Flashcard';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flashcards: this.props.flashcards
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Articulate Dev Challenge</h1>
        </header>
        <h2>Flashcards Block</h2>
        <div className='flash-card-container'>
          {this.state.flashcards.map((flashcard, i) => {
            return <article key={i}>
              <Flashcard index={i} flashcard={flashcard} />
            </article>
          })}
        </div>
        <button className='add-flashcard' onClick={() => {
          const flashcards = [...this.state.flashcards, {
            frontTitle: 'Hello',
            backTitle: 'There'
          }];
          this.setState({ flashcards });
        }}> Hello </button>
      </div>
    );
  }
}

export default App;
