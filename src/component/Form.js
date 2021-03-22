import React, { Component } from 'react';
import axios from 'axios'
import './Form.css'
import Button from '@material-ui/core/Button';

class Form extends React.Component {
	state = { userName: '' };
	handleSubmit = async (event) => {
  	event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    console.log(resp.data);
    this.setState({ userName: '' });
  };
	render() {
  	return ( 
    	<form >
    	  <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username" 
          required 
        />
        <Button variant="contained" color="primary" size="small" onClick={this.handleSubmit}>Search</Button>
    	</form>
    );
  }
}

export default Form;