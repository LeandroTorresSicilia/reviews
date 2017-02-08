import React, { Component } from 'react';
import '../css/user-photo.css';

export default class UserPhoto extends Component {
	
	render() {
		return (
			<img src={this.props.photo} role='presentation' className='photo' />
		);
	}
}

UserPhoto.defaultProps = {
  photo: 'img/user.png'
}