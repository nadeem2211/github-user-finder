import React, { Component } from 'react';
import axios from 'axios'
import './Form.css'


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
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username" 
          required 
        />
        <button>Search</button>
    	</form>
    );
  }
}

export default Form;