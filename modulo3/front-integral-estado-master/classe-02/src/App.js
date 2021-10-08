import hamburguer from './assets/hamburguer.png'
import { useState } from 'react'






function App() {
  const [counter, setCounter] = useState(0)


  function countAddiction() {
    setCounter(counter + 1)
  }

  function countSubtraction() {
    if (counter === 0) {
      return
    }
    setCounter(counter - 1)
  }


  return (
    <div className="App">
      <img src={hamburguer} alt="" className="card__image" />
      <div className="card">
        <h1>Hamburguer</h1>
        <p>
          Arcu, sagittis, ut lectus<br />
          congue dapibus semper odio a,<br /> lobortis.
        </p>


        <div className="card__counter">
          <button className="card__button_subtraction" onClick={countSubtraction}>-</button>
          <span>{counter}</span>
          <button className="card__button_addiction" onClick={countAddiction}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
