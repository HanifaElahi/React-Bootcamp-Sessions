import React from 'react';

import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
      
      <Dinner dishName="chicken Karahi" sweetDish="Kheer"/>
      
      <hr/>

      <Dinner dishName="chicken Biryani" sweetDish="Custard"/>
      
      <hr/>

      <Dinner dishName="Fried Rice" sweetDish="Gajar ka Halwa"/>
      
      <hr/>

    </div>
  );
}

export default App;
