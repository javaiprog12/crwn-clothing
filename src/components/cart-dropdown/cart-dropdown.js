import React from 'react';

import './cart-dropdown.styles.scss';
import  CustomButton from '../custom-button/custom-button.js';
import CartItem from '../cart-item/cart-item.js';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors.js';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.action';

const CartDropdown = ({cartItems,history,dispatch}) =>(
    <div className='cart-dropdown'>
    <div className = 'cart-items'>
       {
         cartItems.length ?
         cartItems.map(cartitem => 
                      <CartItem key={cartitem.id} item={cartitem}/>
                      )
          :(
          <span className='empty-message'>Your cart is empty</span>

          )
       }
    
    </div>
      <CustomButton className='custom-button' onClick={() => 
      {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}
      >GO TO CHECKOUT</CustomButton>
    </div>
);

//usually mapDispatchtOpROPS FOR toggleCartHidden but if we dont we can give it directly 
const mapStateToProps = createStructuredSelector({
    cartItems :selectCartItems
}) 


export default withRouter(connect(mapStateToProps)(CartDropdown));