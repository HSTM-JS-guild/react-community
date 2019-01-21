import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import contentPages from './components/ContentRoutes';

class App extends Component {

  state = {
    pages: contentPages,
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

  render(){ 
    
    const pageContent = this.state.pages.map((page) => (
    <Route 
        key={page.id}
        exact path={page.route} 
        component={() => <page.component />}
        description={page.description}
        title={page.title}
    />
    ));

    return (
      <div>
        <Navigation authed={this.state.authed}/>
        <div id="main">
        {pageContent}
        </div>
      </div>
    )
  }
}


  export default App;