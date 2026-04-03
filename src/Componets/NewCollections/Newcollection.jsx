import React from 'react'
import './Newcollection.css'
import Item from '../Items/Item';
import new_collection from '../Assets/new_collections.js'
const Newcollection = () => {
    return (
        <div className='newcollection'>
            <h1>New Collection</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item) => {
                    return <Item id={item.id} key={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Newcollection
