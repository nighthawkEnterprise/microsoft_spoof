import React, { useState } from "react";
import "./App.css";
import microsoft from './microsoft.jpg';
import { useSpring, animated } from "react-spring";

function App() {
  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const [username,setUsername] = useState('');
  const loginProps = useSpring({
    left: registrationFormStatus ? -500 : 0, // Login form sliding positions
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500, // Register form sliding positions
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 0px transparent"
      : "solid 2px #1059FF",  //Animate bottom border of login button
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2px #1059FF"
      : "solid 0px transparent", //Animate bottom border of register button
  });

  function registerClicked(username) {
    setUsername(username);
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    console.log('')
    setRegistartionFormStatus(false);
  }

  return (
    <div className="container" >
      <div className="login">

        <animated.form action="" id="loginform" style={loginProps}>
          <LoginForm />
        </animated.form>
        <animated.form action="" id="registerform" style={registerProps}>
          <RegisterForm username={username}/>
        </animated.form>
      </div>

    </div>
  );
  function LoginForm() {
    console.log('rendered');
    const [username, setUsername] = useState('');
    return (
      <React.Fragment>
      <div className="loginForm-container">
        <div className="loginForm">
            <div className='header'>
              <img src={microsoft} height={50} width={100}/>
            </div>
            <div class="header"> <h2> Sign in </h2> </div>
            <input type="email" placeholder="Email, phone, or Skype"  onChange={e => setUsername(e.target.value)} id="username"/>
            <label><p> No account?   <a href="#">     Create one! </a></p></label>
            <div id="windows-hello">
                <label><p> <a href="#"> Sign in with Windows Hello or a security key</a> </p></label>
                <img id="question" src="https://logincdn.msauth.net/shared/1.0/content/images/documentation_bcb4d1dc4eae64f0b2b2538209d8435a.svg"/>
            </div>
            <div class="btn-container">
              <input type="submit" className="button" value="Next" onClick={() => registerClicked(username)}/>
            </div>
          </div>
          <div className="sign-in">
              <img id="key" src="https://logincdn.msauth.net/shared/1.0/content/images/signin-options_4e48046ce74f4b89d45037c90576bfac.svg" />
              <p id="sign"> Sign-in options </p>
          </div>
        </div>
      </React.Fragment>
    );
  }

  function RegisterForm(props) {
    const [password, setPassword] = useState('');
    function submit(e,username,password) {
      e.preventDefault();
      console.log('submit', username);
      console.log('submit', password);
    }
    return (
      <React.Fragment  >
      <div className="registration-container">
        <div className="registrationForm">
            <div className='header'>
              <img src={microsoft} height={50} width={100}/>
            </div>
            <div id="hold">
              <div id="back">
                 <img onClick={loginClicked}src="https://logincdn.msauth.net/shared/1.0/content/images/arrow_left_a9cc2824ef3517b6c4160dcf8ff7d410.svg"/>
                 <p>nithinmoorthy11@gmail.com </p>
              </div>
                 <h3 id="password"> Enter Password </h3>
           </div>
            <input type="password" placeholder="Password" id="password-input" value={password} onChange={e => setPassword(e.target.value)} id="username"/>
            <label id="keep-signed"> <input type="checkbox" id="check"/> <span id="keep-signed-text"> Keep me signed in </span> </label>
            <div id="forgot-password">
                <label><p> <a href="#">Forgot Password?</a> </p></label>

            </div>
            <div id="windows-hello-password">
                <label><p> <a href="#"> Sign in with Windows Hello or a security key</a> </p></label>
                <img id="question" src="https://logincdn.msauth.net/shared/1.0/content/images/documentation_bcb4d1dc4eae64f0b2b2538209d8435a.svg"/>
            </div>
            <div class="btn-container">
              <input type="submit" className="button" value="Sign In" onClick={e => submit(e, props.username, password)}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}


export default App;
