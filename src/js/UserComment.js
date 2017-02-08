import React, { Component } from 'react';
import '../css/user-comment.css';

export default class UserComment extends Component {
	
	render() {
		return (
			<p className='comment'>{this.props.comment}</p>
		);
	}
}