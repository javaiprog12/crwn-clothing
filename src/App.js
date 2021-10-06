
import './App.css';
import HomePage from './pages/homepage/homepage.js';
import React from 'react';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component = {HomePage}></Route>
        <Route path='/shop' component = {ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
