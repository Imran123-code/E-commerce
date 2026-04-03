import React from 'react'
// import MyImage from "../Componets/Assets/p1_product_i1.png";
import Hero from '../Componets/Hero/Hero';
import Popular from '../Componets/Popular/Popular';
import Offers from '../Componets/Offers/Offers';
import Newcollection from '../Componets/NewCollections/Newcollection';
function Shop() { 
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <Newcollection/>
        </div>
    )
}

export default Shop
