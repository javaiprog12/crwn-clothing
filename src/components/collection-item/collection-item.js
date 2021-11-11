import React from 'react';

import './collection-item.styles.scss';
import  CustomButtom from '../custom-button/custom-button';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';


//props need to be passed in curly braces else error
const CollectionItem = ({item,addItem}) =>{
    const {id,name,price,imageUrl} =item;
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage :`url(${imageUrl})`}}>

            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButtom onClick={() => addItem(item)}  inverted>Add to cart</CustomButtom>
        </div>
    )

}
const mapDispatchToProps = dispatch =>({
   addItem : item => dispatch(addItem(item))
  
})

export default connect(null,mapDispatchToProps)(CollectionItem);