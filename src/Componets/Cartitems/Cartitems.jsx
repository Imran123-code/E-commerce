import React, { useContext } from 'react'
import "./Cartitems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"

const Cartitems = () => {
    const { cartItem, all_product, removeFromCart, } = useContext(ShopContext)
    return (
        <div className='Cartitems'>
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Rmove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return <div key={e.id}>
                        <div className="cartitem-format cartitems-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitemsQuanity'>{cartItem[e.id]}</button>
                            <p>${e.new_price * cartItem[e.id]}</p>
                            <img className='carticon-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null
            })}
        </div>
    )
}

export default Cartitems
