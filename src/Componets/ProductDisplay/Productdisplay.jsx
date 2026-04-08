import React, { useContext } from 'react'
import "./Productdisplay.css"
import start_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
const Productdisplay = (props) => {
    const { product } = props;
    const {addToCart}= useContext(ShopContext);
    if (!product) {
        return <div>Loading...</div>;
    }
    return (
        <div className='Productdisplay'>
            <div className="Productdisplay-left">
                <div className="Productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="Productdisplay-img">
                    <img className='Productdisplay-img-main' src={product.image} alt="" />
                </div>
            </div>
            <div className="Productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplayright-star">
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>{122}</p>
                </div>
                <div className="productdisplayright-prices">
                    <div className="productdisplayright-pice-old">${product.old_price}</div>
                    <div className="productdisplayright-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplayright-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis deleniti porro itaque hic placeat eligendi. Mollitia voluptate molestias eligendi ad accusantium atque, vel asperiores dolorum! Ut assumenda dolorum fugit. Minima!
                </div>
                <div className="productdisplayright-size">
                    <h1>Select size</h1>
                    <div className="productdisplayright-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplayright-category'><span>Category</span>Woman , T-sshirt, Crop Top</p>
                <p className='productdisplayright-category'><span>Tags: </span>Modern ,latest</p>

            </div>
        </div>
    )
}

export default Productdisplay
