import React from "react";

import img1 from "../../images/img1.jpg";

export default function Infos({props = []}){

    return(
        <div className= "infos">
          <h1 className="titulo"> Rick and Morty </h1>
          <img className="primeira-imagem" src={img1} alt="cavalo"/> 
          <br />
          <p className="p-um"> O numero total de de episodios é de: {props.count}  e o numero de paginas na lista é de: {props.pages}</p>
        </div>
    )
}