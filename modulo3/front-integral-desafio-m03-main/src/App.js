import { useState } from 'react'

import './App.css';
import Header from './components/cabeçalho/cabecalho'
import Main from './components/main/main';

import Filtro from './components/filtro/filtro'
import Resumo from './components/resumo/resumo'
function App() {
  const [filterAberto, setFilterAberto] = useState()
  const [registros, setRegistros] = useState([{ data: new Date(), descricao: "Venda de brigadeiros", categoria: "Cartão", valor: 1097 }, { data: new Date(), descricao: "Venda de brigadeiros", categoria: "Cartão", valor: 1097, id: Math.random() }
  ])


  const [modalAberto, setModalAberto] = useState(true)
  return (
    <div className="App">
      <Header></Header>
      <Main
        setFilterAberto={setFilterAberto}
        filterAberto={filterAberto}
        Filtro={Filtro}
        Resumo={Resumo}
        registros={registros}
        setModalAberto={setModalAberto}
        modalAberto={modalAberto}
      >
      </Main>
    </div >
  );
}

export default App;
