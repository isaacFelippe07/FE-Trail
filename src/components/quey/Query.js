import React from "react";
import {gql, request} from 'graphql-request'

export const query = (page, dados_pesquisa="") => gql`
query{
    episodes(filter:{name:"${dados_pesquisa}"}, page: ${page}){
      info{
        count 
        pages
        next
        prev
      }
        results{  
          name 
          episode
          id
          air_date
          characters{
            name
          }
        }
      }
    }
`

export function requisicao(indice, dados_pesquisa){
 return  request('https://rickandmortyapi.com/graphql', query(indice,dados_pesquisa))
}

export const exportQueryObject = {
   requisicao, query
}

export default exportQueryObject;
