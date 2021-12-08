import React from "react";

import img1 from "../../images/img1.jpg";

export default function Infos(){
    return(
        <div className= "infos">
          <h1 className="titulo"> Rick and Morty </h1>
          <img className="primeira-imagem" src={img1} alt="cavalo"/> 
          <br />
          <p className="p-um"> O numero total de de episodios é de:  e o numero de episodios na lista:</p>
        </div>
    )
}