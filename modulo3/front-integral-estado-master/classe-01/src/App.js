import kelvin from './assets/kelvin-costa.png'
import { useState } from 'react'

function Card() {
  return <div className="card">
    <img className='card__image' src={kelvin} alt="" />
    <h1 className='card__name'>Kelvin Costa</h1>
    <span className='card__insta'>@costa</span>
    <span className='card__seguidores'>140 seguidores</span>
    <span className='card__seguindo'>207 seguindo</span>
  </div>
}



function App() {
  const [follow, setFollow] = useState('seguir')

  function seguirOuNao() {
    if (follow === 'seguir') {
      setFollow('seguindo')

    } else {
      setFollow('seguir')
    }
  }


  return (
    <div className="App">
      <Card />

      <button className={follow} onClick={seguirOuNao}>{follow.toLocaleUpperCase()}</button>
    </div>
  );
}

export default App;
