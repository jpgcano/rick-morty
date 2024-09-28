import imagenRickMorty from "./img/rick-morty.png"
import './App.css';
import { useState } from "react";
import Characters from "./componentes/characters";


function App() {
  const [charactes, setCharactes] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character/');
    const characterApi = await api.json();

    setCharactes(characterApi.results);

  };


  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title' >Rick & morty </h1>
        {
          charactes ?
            (<Characters characters={charactes} setCharacters={setCharactes}  />)
            : <>
              <img className='img-home' src={imagenRickMorty} alt='Rick and morty' ></img>
              <button onClick={reqApi} className="btn-search" >Buscar personajes </button>
            </>
        }

      </header>
    </div>
  );
}

export default App;
