
import './App.css';
import Infos from  './components/infos/Infos'
import Header from './components/header/Header';
import Card from './components/card/Card';
import React, { useState, useEffect} from 'react';
import { requisicao } from './components/quey/Query'
import Paginacao from './components/paginacao/Paginacao';



function App() {
  const [episodios, setEpisodios] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [infos, setInfos] = useState([]);
  const [pesquisa, setPesquisa] = useState("");


  useEffect(()=>
  requisicao(pagina, pesquisa).then((data)=>{
    const episodios = data.episodes.results
    const infos = data.episodes.info

    setEpisodios(episodios)
    setInfos(infos)
  }),[pagina, pesquisa]
  )
  
  return (        
    <div className="App">
      <Header pesquisa={pesquisa} setPesquisa={setPesquisa} />   
      <div className="div-master">
        <Infos props={infos}/>
        {
            episodios.length > 0 ? <Card className={"card-episodio"} props={episodios} /> : 
            <h1>Carregando, até agora sem dados para renderizar!</h1>
        }
        <Paginacao  page={pagina} setPagina={setPagina} dados={infos}/>  
        </div>
      </div>
  );
}

export default App;
