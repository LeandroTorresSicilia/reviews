import React, { Component } from 'react';
import '../css/user-box.css'; 
import UserPhoto from "./UserPhoto";
import UserName from "./UserName";
import UserComment from "./UserComment";

export default class UserBox extends Component {

  render() {
    return (
      <div className='user-box'>
        <UserPhoto />
        <div className='text-box'>
          <UserName />
          <UserComment />
        </div>
      </div>
    );
  }
}