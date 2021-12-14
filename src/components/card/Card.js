import React from "react";
import './Card.css';


export const Card = ({props = []}) =>{
    return(
       <>
           {props.map((dados)=>
            <div className="card">
                <h3><a>Title:      </a>{dados.name}</h3>
                <li><a>Season:     </a>{dados.episode}</li>
                <li><a>Release:    </a>{dados.air_date}</li>
                <li><a>Characters: </a>{dados.characters.map((personagens)=>personagens.name)}</li>
           </div>
        )}
      </>
    )
}
export default Card;