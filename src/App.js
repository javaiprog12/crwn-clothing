
import './App.css';
import HomePage from './pages/homepage/homepage.js';
import React from 'react';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';



class App extends React.Component{

  constructor(){
    super()
    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    //we need to uodate the state with firabse data
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }else{
        this.setState({
          currentUser:userAuth
        });
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component = {HomePage}></Route>
          <Route path='/shop' component = {ShopPage}></Route>
          <Route path='/signin' component = {SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }

}

export default App;
