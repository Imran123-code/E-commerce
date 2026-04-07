import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom'
import Breadcrum from '../Componets/Breadcrums/Breadcrum';
import Productdisplay from '../Componets/ProductDisplay/Productdisplay';
import DescriptionBox from '../Componets/DescriptionBox/DescriptionBox';
function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div className='prodcts'>
      {/* <Breadcrum product={product}/> */}
      {product && <Breadcrum product={product} />}
      <Productdisplay product={product} />
      <DescriptionBox/>
    </div>
  )
}

export default Product
