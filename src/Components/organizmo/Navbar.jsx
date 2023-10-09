import React from "react";
import Menu from "../moleculas/Menu";
import Menudata from "../../data/Menudata.json";



const Navbar = () => {

    const {menuItems}=Menudata;

    return(
        <nav className="menu-item" >
            <Menu items={menuItems}/>
        </nav>
    )
}


export default Navbar;