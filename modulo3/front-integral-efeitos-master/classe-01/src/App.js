import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [paises, setPaises] = useState([])
  const [paisesTemp, setPaisesTemp] = useState([])
  const [inputPais, setInputPais] = useState()
  const [paisEncontrado, setPaisEncontrado] = useState('')



  function handleOnChange(event) {
    setPaisEncontrado(event.target.value)
  }

  useEffect(() => {
    fetch('https://restcountries.com/v3/all')
      .then(response => response.json())
      .then(dados => {
        setPaises(dados)
        setPaisesTemp(dados)
      })
  }, [])


  useEffect(() => {
    if (!paisEncontrado) {
      setPaisesTemp(paises)
      return
    }

    setPaisesTemp(paises.filter(pais => {
      return pais.name.common === paisEncontrado
    }))
  }, [paisEncontrado])





  function onSubmit(e) {
    e.preventDefault()
    if (!paisEncontrado) return
    setPaises(paisesTemp)
  }






  function Pais() {
    return (
      paises.map(pais => {
        const { name, flags, ccn3 } = pais
        return (
          <div className='pais' key={ccn3}>
            <h1>{name.common}</h1>

            <img className="pais__flag" src={flags[0]} alt="" />
          </div>
        )
      })
    )
  }





  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text" value={paisEncontrado} onChange={handleOnChange} />
      </form>
      <div className="paises">
        <Pais />
      </div>

    </div>
  );
}

export default App;
