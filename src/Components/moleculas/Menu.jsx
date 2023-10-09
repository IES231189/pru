import React from 'react';
import Enlaces from '../atomos/Enlaces';

const Menu=({items})=>{
    return(
        <ul>
            {items.map((item ,index)=>(
                <Enlaces key={index} label={item.label} link={item.link}/>
            ))}
        </ul>
    );
}



export default Menu;