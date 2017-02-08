import React, { Component } from 'react';
import '../css/user-name.css';

export default class UserName extends Component {
	
	render() {
		return (
			<h2 className='name'>{this.props.name}</h2>
		);
	}
}