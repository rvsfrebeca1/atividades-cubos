import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Get unlimited access to everything</h1>
      <div className="container-dados-aside">

        <h2>Total billed $50</h2>
        <p>Enter your credit card details to complete subscription</p>
        <div className="number">

          <label htmlfor="card-number">Card number</label>
          <input type="text" id="card-number" />
        </div>

        <div className="side-to-side">
          <div className="date">

            <label htmlfor="expiration-date">Expiration date</label>
            <input type="text" id="expiration-date" />

          </div>
          <div className="security">

            <label htmlfor="security-code">Security code</label>
            <input type="text" id="security-code" />
          </div>
        </div>

      </div>
      <p className="bottom">
        By subscribing you agree to our Use of Service. Your payment method will be charged with $50 and you’ll have
        access to all locked features until 20 Jan 2022.
      </p>


      <button>Pay Now</button>
    </div>
  );
}

export default App;
