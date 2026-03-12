import React from 'react'
import MyImage from "../Componets/Assets/p1_product_i1.png";
function Shop() {
    return (
        <div className='cointainer' style={{
             display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
            gap:'30px',
            background:'black',
            color:"white",
            padding:"40px",
            marginTop:'30px',
            marginLeft:'40px',
            marginRight:'40px',
            borderx:'1px solid red',
        }}>
            <div
                style={{
                    width:'300px',
                    height:'300px',
                    border:'1px solid white',
                }}
            ><img style={{
                width:"100%"
            }} src={MyImage} alt='i'/></div>
             <div
                style={{
                    width:'300px',
                    height:'300px',
                    border:'1px solid white',
                }}
            >
                <img src={MyImage} alt='i'/>
            </div>
             <div
                style={{
                    width:'300px',
                    height:'300px',
                    border:'1px solid white',
                }}
            >
                <img src={MyImage} alt='i'/>
            </div>
             <div
                style={{
                    width:'300px',
                    height:'300px',
                    border:'1px solid white',
                }}
            ><img src={MyImage} alt='i'/></div>
             <div
                style={{
                    width:'300px',
                    height:'300px',
                    border:'1px solid white',
                }}
            ><img src={MyImage} alt='i'/></div>
             <div
                style={{
                    width:'300px',
                    height:'300px',
                    border:'1px solid white',
                }}
            ><img src={MyImage} alt='i'/></div>
        </div>
    )
}

export default Shop
