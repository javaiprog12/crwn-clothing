import React from 'react';

import './cart-dropdown.styles.scss';
import  CustomButton from '../custom-button/custom-button.js';
import CartItem from '../cart-item/cart-item.js';
import {connect} from 'react-redux';


const CartDropdown = ({cartItems}) =>(
    <div className='cart-dropdown'>
    <div className = 'cart-items'>
       {
         cartItems.map(cartitem => 
                      <CartItem key={cartitem.id} item={cartitem}/>
                      )
       }
    
    </div>
      <CustomButton className='custom-button'>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({cart:{cartItems}}) =>({
    cartItems
}) 


export default connect(mapStateToProps)(CartDropdown);