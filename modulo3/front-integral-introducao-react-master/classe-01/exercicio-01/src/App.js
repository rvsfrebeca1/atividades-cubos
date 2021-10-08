
import './App.css';

import facebook from './assets/facebook.svg'
import google from './assets/google.svg'
import seta from './assets/seta.svg'

function App() {
  return (
    <div className="container">
      <h1>Log In</h1>
      <p>
        Log in to your account to upload or download pictures, videos or music.
      </p>


      <input type="text" placeholder="Enter your email address" />

      <div className="space-between">

        <a href="#">Forgot password?</a>
        <button>Next <img src={seta} alt="" /></button>
      </div>

      <div className="redes-sociais">
        <span>Or log in with</span>

        <div className="logos">

          <div className="facebook">
            <img src={facebook} alt="" />
            <span>Facebook</span>
          </div>

          <div className="google">
            <img src={google} alt="" />
            <span>Google</span>
          </div>
        </div>
        <span className="span-bot">Don’t have an account yet? <a href="#">Sign up</a></span>

      </div>

    </div>
  );
}

export default App;
