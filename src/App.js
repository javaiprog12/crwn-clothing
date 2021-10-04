
import './App.css';
import HomePage from './pages/homepage/homepage.js';
import React from 'react';
import {Route} from 'react-router-dom';

const HatsPage =() =>{
  return (
      <div>
          <h1>HATS PAGE</h1>
      </div>
  )
  
}

function App() {
  return (
    <div>
      <Route exact path='/' component = {HomePage}></Route>
      <Route path='/shop/hats' component = {HatsPage}></Route>
      
    </div>
  );
}

export default App;
