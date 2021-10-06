
import './App.css';
import HomePage from './pages/homepage/homepage.js';
import React from 'react';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';



function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component = {HomePage}></Route>
        <Route path='/shop' component = {ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
