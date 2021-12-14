import React from "react";
import {gql, request} from 'graphql-request'

export const query = gql`
query{
    episodes(page:3){
      info{
        count 
        pages
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

export function requisicao(){
 return  request('https://rickandmortyapi.com/graphql', query)
}

export const exportQueryObject = {
   requisicao, query
}

export default exportQueryObject;
