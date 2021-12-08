import React from "react";

import './Header.css';
import Logo from '../../images/logo.jpeg'

function Header(){
    return(
        <div>
            <nav>
                <div className="logo"><img src={Logo} alt="Logo header"/></div>
                <input className="pesquisa" type="text" id="busca" name="busca" />
                <span>
                <button className="btn-pesquisa" type="submit"/>
                </span>
                <ul className="lista">
                    <li>Home</li>
                    <li>Episodios</li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;