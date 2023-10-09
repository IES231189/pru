import React from 'react';

const CarruselELement = ({item})=>{
    return(
        <div id='contenedor-card'>
            <img src={item.image} alt={item.caption}/>
        </div>
    )
}

export default CarruselELement;