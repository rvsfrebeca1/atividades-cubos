import cookie from './assets/cookie.svg'
import close from './assets/close.svg'
import { useState } from 'react'

function App() {


  const [mostrar, setMostrar] = useState('finder')

  function esconderCard() {
    setMostrar('hidden')
  }

  function Card(props) {
    return <div className={`card1 ${mostrar}`} >
      <img className='card1__close' src={close} alt="" onClick={esconderCard} />
      <img className='card1__cookie' src={cookie} alt="" />
      <p className='card1__paragrafo'>Nós utilizamos cookies para melhorar <br />nossa UX, analytics e marketing.</p>
      <button className='card1__button' onClick={esconderCard}>Tudo Bem!</button>
    </div>
  }

  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
