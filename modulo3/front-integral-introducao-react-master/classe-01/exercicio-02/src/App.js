
import './App.css';

import google from './assets/google.svg'

function App() {
  return (
    <div className="container">
      <h1>Sign up for free</h1>

      <div className="google">
        <span>Sign up with Google</span>
        <img src={google} alt="" />
      </div>

      <span className="login-email">Or sign up with email</span>

      <div className="nome">

        <label htmlfor="name">Full Name</label>
        <input type="text" id="name" placeholder="Eg. Mary Olhson" />
      </div>


      <div className="email">

        <label htmlfor="email">Email Address</label>
        <input type="text" id="email" placeholder="your@email.com" />
      </div>


      <button>Get started</button>

      <span className="bottom" id="bottom">
        Already have an account? <a href="#">Log in</a>
      </span>
    </div>
  );
}

export default App;
