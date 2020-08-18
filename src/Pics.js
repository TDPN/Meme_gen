import React, { Component } from 'react';
import './App.css';
import Meme1 from './Pics/drake.jpg'
import Meme2 from './Pics/fire.jpg'
import Meme3 from './Pics/jc.jpg'
import Meme4 from './Pics/kh.jpg'
import Meme5 from './Pics/ts.jpg'

class Pics extends Component {
    render(){ 
    const imageArray = [Meme1, Meme2, Meme3, Meme4, Meme5]
    let randomNum = Math.floor(Math.random() * imageArray.length)
    let imageMapper = imageArray.map((image) => {
        return <img src={image} width="25%" height="25%" alt="something"/>
    })
    console.log(imageMapper[randomNum])
  return (
    <div className="App">
     <h1>Componet connected</h1>
    </div>
  );
}
}
export default Pics;