import React, { Component } from 'react';
import './App.css';
// import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';

class App extends Component {

  state = {
    authed: true,
    user: [],
    fieldErrors: false,
  }

  sendLogin = () =>{
    fetch(`https://api.connectedcommunity.org/api/v2.0/Authentication/GetLogin?username=jonathan.loh@healthstream.com&password=Loh1234!@`)
    .then((data)=>{
      return data.json();
    }).then((userArray)=>{
          this.setState({ 
              token: userArray[0],
              authed: true,
          })
          const userToken = JSON.stringify(userArray[0]);
          sessionStorage.setItem('jToken', userToken);
      });
  }

  onFormSubmit = evt => {
    console.log('submitted login info');
    const user = this.state.fields;
    const fieldErrors = this.validate(user);
    this.setState({fieldErrors});
    evt.preventDefault();

    if (Object.keys(fieldErrors).length) return;

    /********* PLACE INVERSE DATA FLOW HERE ************/
      this.props.sendLogin(evt.target.id, user.email, user.password);
    
      evt.preventDefault();
  };

  render() {
      return (
          <div className="App">
            <Navigation />
            <Main />
          </div>
      );
    }
  }
  export default App;
      