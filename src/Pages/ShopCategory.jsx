import React, { useContext } from 'react'
import "./Css/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Componets/Assets/dropdown_icon.png';


function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='Shop-category'>
      <img src={props.banner} alt='banner' />
      <div className="shopcategory-indecSort">
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt=''/>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default ShopCategory
