import React from "react";
import  './Paginacao.css'

export default function Paginacao({page, setPagina, dados}){
   const qtdPage = dados.pages
    return(
        page < qtdPage?
        <div className="botoes-paginacao">
            {page < 2? <p>Pagina: </p>: <button className="botao-paginacao" onClick={()=>setPagina(page-1)}>Prev</button>}
            <label  className="label-paginacao">{page}</label>
            <button className="botao-paginacao" onClick={()=>setPagina(page+1)}>Next</button>
        </div>
        : 
        <div className="botoes-paginacao">
            <button className="botao-paginacao" onClick={()=>setPagina(page-1)}>Prev</button>
            <label  className="label-paginacao">{page}</label>
        </div>
    )
}