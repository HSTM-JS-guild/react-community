import React, { Component } from 'react';
// import './Login.css';
import Login from './Login';
import Main from './Main';


export default class Authentication extends Component{
    
      authenticated = () => {
        if(!this.props.authed && this.props.fieldErrors){
        // If the user is not authenticated and there are field errors (wrong password or user already exists), send both the login method and the error messages are passed down as props.
          return(
            <Login sendLogin={this.props.sendLogin} errorMessage={this.props.errorMessage}/>
          )
        }else if(!this.props.authed){

        //If the user is not authenticated, send the login method as props.
          return(
            <Login sendLogin={this.props.sendLogin}/>
          )
        }else if(this.props.authed){
            // If the user authenticates, they are good to go!
          return(
            <div>
              <Main pages={this.props.pages} user={this.props.user}/>
            </div>
          )
        }
      }
    
      render() {
        return (
            <div className="main-login">
            
                {this.authenticated()}

              
            </div>
        );
      }
    }