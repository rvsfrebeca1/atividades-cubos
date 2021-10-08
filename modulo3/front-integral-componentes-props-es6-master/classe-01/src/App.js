import close from './assets/close.svg'
import alert from './assets/alert.svg'
import cookie from './assets/cookie.svg'

function Card(props) {
  return <div className="card1">
    <img className='card1__close' src={close} alt="" />
    <img className='card1__cookie' src={props.type === "Cookie" ? cookie : alert} alt="" />
    <p className='card1__paragrafo'>{props.type === "Cookie" ? "Nós utilizamos cookies para melhorar nossa UX, analytics e marketing." : `Você será deslogado imediatamente!`}</p>
    <button className={`card1__button ${props.type}`}>{props.type === "Cookie" ? "Tudo Bem!" : "Extender Login"}</button>
  </div>
}


function App() {
  return (
    <div className='App'>
      <Card type='Cookie' />
      <Card type='Alert' />
    </div>
  )
}

export default App;
