import logo from './logo.svg';
import './App.css';
import microsoft from './microsoft.jpg';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null
    }
  }
  position = async () => {
    await navigator.geolocation.getCurrentPosition(
      position => this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }),
      err => console.log(err)
    );
  }
  componentDidMount() {
    this.position();
  }
  press() {
      var today = new Date();
      console.log(today.getFullYear());
  }
  render() {
    console.log('this.state.latitude: ', this.state.latitude);
    console.log('this.state.latitude: ', this.state.longitude);

    return(
      <div className="container">
      <div className="login">
        <div className='header'>
          <img src={microsoft} height={50} width={100}/>
          <h2> Sign in </h2>
        </div>
        <input type="email" placeholder="Email, phone, or Skype"/>
        <label><p> No account?   <a href="#">     Create one! </a></p></label>
        <div id="windows-hello">
        <label><p> <a href="#"> Sign in with Windows Hello or a security key</a> </p></label>
        <img id="question" src="https://logincdn.msauth.net/shared/1.0/content/images/documentation_bcb4d1dc4eae64f0b2b2538209d8435a.svg"/>
        </div>
        <div class="btn-container">
          <input type="submit" className="button" value="Next" onClick={this.press}/>
        </div>
      </div>
      <div className="sign-in">
        <img id="key" src="https://logincdn.msauth.net/shared/1.0/content/images/signin-options_4e48046ce74f4b89d45037c90576bfac.svg" />
        <p id="sign"> Sign-in options </p>
      </div>
      </div>
    )
  }
}
export default App;
