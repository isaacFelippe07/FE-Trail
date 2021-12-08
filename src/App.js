import './App.css';
import Infos from  './components/infos/Infos'
import Header from './components/header/Header';
import Card from './components/card/Card';
import React, { useState, useEffect} from 'react';
import { requisicao } from './components/quey/Query'



function App() {
  const [episodios, setEpisodios] = useState([]);
  useEffect(()=>
  requisicao().then((data)=>{
    const episodios = data.episodes.results
    setEpisodios(
      episodios
    )
  }),[]
  )

  return (
    <div className="App">
      <Header />
      <div className="div-master">
      <Infos />
      {
           episodios.length > 0 ? <Card className={"card-episodio"} props={episodios} /> : 
           <h1>Carregando, até agora sem dados para renderizar!</h1>
      }
        </div>
      </div>
  );
}

export default App;
