
import './App.css';
import HomePage from './pages/homepage/homepage.js';
import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors.js';
import CheckOutPage from './pages/checkout/checkout';

class App extends React.Component{

  // constructor(){
  //   super()
  //   this.state = {
  //     currentUser:null
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount(){
    //we need to uodate the state with firabse data
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            
              id:snapShot.id,
              ...snapShot.data()
            
          })
        })
      }else{
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component = {HomePage}></Route>
          <Route path='/shop' component = {ShopPage}></Route>
          <Route exact path='/checkout' component = {CheckOutPage}></Route>
          <Route exact path='/signin' render = {() => 
                  this.props.currentUser?(
                  <Redirect to='/'/>
                  ):
                  <SignInAndSignUpPage/>
                  }></Route>
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
 setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
