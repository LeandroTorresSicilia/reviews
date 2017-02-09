import React, { Component, PropTypes } from 'react';
import '../css/app-reviews.css';
import UserBox from "./UserBox";

export default class AppReviews extends Component {

  render() {
    return (
      <div>
        <div className='reviews'>
          <h1>Reviews</h1>
          <p>See what our users have been saying.</p>
        </div>
        { this.renderReviews() }
      </div>
    );
  }

  renderReviews() {
    const { reviews } = this.props;
    return reviews.map(rev => {
      return <UserBox name={ rev.name } comment={ rev.comment } photo={ rev.photo } />
    })
  }
}