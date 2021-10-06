import React from 'react';
import CollectionPreview from '../../components/collection-preview-component/collection-preview.js';
import SHOP_DATA from './shop.data.js';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            collections : SHOP_DATA
        } ;

    }

    render(){
        const {collections} = this.state
        return (
            <div className='shop-page'>
                {
                    collections.map(({id,...otherSectionProps})=>{
                       return  <CollectionPreview key={id} {...otherSectionProps}/>
                    })
                }

            </div>
        )
    }
}

export default ShopPage;