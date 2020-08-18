import React, { Component } from 'react';
import './App.css';
import Pics from './Pics.js'

class App extends Component {
  onClickerBOI = () => {
    window.location.reload()
  }



  render() {
  return (
    <div className="App">
      <Pics />
     <button onClick={this.onClickerBOI}>New MEME</button>
    </div>
  );
}
}
export default App;
