import React from 'react';

import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import  {toggleCartHidden} from '../../redux/cart/cart.action';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import {selectorCartItemsCount} from '../../redux/cart/cart.selectors.js';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden,itemCount}) =>(
    <div   className = 'cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{itemCount}</span>
    </div>
)
//to trigger action
const mapDispatchToProps = dispatch => ({
  toggleCartHidden :() => dispatch(toggleCartHidden())
})

const mapStateToProps= createStructuredSelector({
  itemCount : selectorCartItemsCount
})

export  default connect(mapStateToProps,mapDispatchToProps)(CartIcon);