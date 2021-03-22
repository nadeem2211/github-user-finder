import React, { Component } from 'react';
import './Card.css'
// import Avatar from '@material-ui/core/Avatar';

// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

class Card extends React.Component {
	render() {
  	const profile = this.props;
    
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name" lable="name">name: {profile.name}</div>
          <div className="bio">Bio: {profile.bio}</div>
          <div className="blog">Blog: {profile.blog}</div>
          <div className="email">Email: {profile.email}</div>
          <div className="company">Company: {profile.company}</div>
          <div className="hireable">Hireable: {profile.hireable}</div>
          <div className="location">Location: {profile.location}</div>
        </div>
    	</div>
    );
  }
}

export default Card;