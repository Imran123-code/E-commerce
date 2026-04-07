import React from 'react'
import "./RelatedProducts.css"
import data_products from "../Assets/data"
import Item from '../Items/Item'

const RelatedProducts = () => {
  return (
    <div className="RelatedProduct">
        <h1>Related prodcts</h1>      
        <hr/>
        <div className="relatedProducts-items">
            {data_products.map((item,i) =>{
                return <Item id={item.id} key={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} /> 

            })}
        </div>
    </div>
  )
}

export default RelatedProducts
