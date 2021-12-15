import React from "react";

import './Header.css';
import Logo from '../../images/logo.jpeg'

function Header({pesquisa, setPesquisa}){

    return(
        <div>
            <nav>
                <div className="logo"><img src={Logo} alt="Logo header"/></div>
                <input className="pesquisa" type="text" value={pesquisa} onChange={event => setPesquisa(event.target.value)}/>
                <span>
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