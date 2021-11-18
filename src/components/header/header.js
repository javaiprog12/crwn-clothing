import React from 'react';

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.js';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import  {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';


const Header = ({currentUser,hidden}) =>{
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser?
                   ( <div className='option' onClick= {() => auth.signOut()}>
                        SIGN OUT
                    </div>
                   ):
                   (
                       <Link className='option' to='/signin'>
                           SIGN IN
                       </Link>
                   )
                }
                 <CartIcon/>
                
                
            </div>
            {
                hidden ? null:<CartDropdown/>
            }
            
            

        </div>
    )
}
//state is toplevel root reduer reqd to initialize actions see the video 135 user selectors to get info on this
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);