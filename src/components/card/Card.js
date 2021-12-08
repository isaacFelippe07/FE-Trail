import React from "react";
import './Card.css';


export const Card = ({props = []}) =>{
    return(
       <>
           {props.map((dados)=>
            <div className="card">
                <h3><a>Titulo:      </a>{dados.name}</h3>
                <li><a>Temporada:   </a>{dados.episode}</li>
                <li><a>Lancamento:  </a>{dados.air_date}</li>
                <li><a>Personagens: </a>{dados.characters.map((personagens)=>personagens.name)}</li>
           </div>
        )}
      </>
    )
}
export default Card;