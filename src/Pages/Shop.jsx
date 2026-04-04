import React from 'react'
// import MyImage from "../Componets/Assets/p1_product_i1.png";
import Hero from '../Componets/Hero/Hero';
import Popular from '../Componets/Popular/Popular';
import Offers from '../Componets/Offers/Offers';
import Newcollection from '../Componets/NewCollections/Newcollection';
import Newsletter from '../Componets/Newsletter/Newsletter';
function Shop() { 
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <Newcollection/>
            <Newsletter/>
        </div>
    )
}

export default Shop
