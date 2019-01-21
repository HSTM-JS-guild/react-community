import React from 'react'
import {Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends React.Component{
  state = {
    fields: {
      password: '',
      email: ''
    },
    fieldErrors: {},
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

  validate = user => {
    const errors = {};
    if (!user.email) errors.email = 'Email Required';
    if (!user.password) errors.password = 'Password Required';
    return errors;
  };

  onInputChange = evt => {
    const fields = Object.assign({}, this.state.fields);
    fields[evt.target.name] = evt.target.value;
    this.setState({fields});
  };

  render(){
    return(
      <div className='login-form'>
          <h2>React Community Demo Login:</h2>
          <span style={{color: 'red'}}>{this.props.errorMessage}</span>
          <Form>
            <FormGroup row>
                <Label for="email" sm={2}>Email</Label>
                <Col sm={10}>
                <span style={{color: 'red'}}>{this.state.fieldErrors.email}</span>
                    <Input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="name@domain.com"
                    onChange = {this.onInputChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="password" sm={2}>Password</Label>
                <Col sm={10}>
                <span style={{color: 'red'}}>{this.state.fieldErrors.password}</span>
                    <Input 
                    type="password" 
                    name="password" 
                    id="password"
                    placeholder="password"
                    onChange={this.onInputChange} />
                </Col>
            </FormGroup>
            <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                    <Button id="login" onClick={this.onFormSubmit}>Submit</Button>
                </Col>
            </FormGroup>
        </Form>
    </div>
    );
  };

}
