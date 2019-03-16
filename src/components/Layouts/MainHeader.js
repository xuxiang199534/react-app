import React, { Component } from 'react';
import './MainHeader.less';
export default class MainHeader extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return (
      <div className='main-header'>
        <div className="a">eeeee</div>
        <div className="b">wwwww</div>
        <div className="main-header-c">ccccc</div>
        <div className="main-header-d">ddddd</div>
        <div className="main-header-e">eeeee</div>
        <div className="main-header-f">fffff</div>
        <div className="main-header-g">ggggg</div>
        <div className="main-content">
          <div className="main-content-header">content</div>
        </div>
        <div className="cardA">
          <div className="a">
            <div className="b">contentb</div>
          </div>
          <div className="b">contentb</div>
        </div>
        <div className="button">
          <div className="a">contentb</div>
        </div>
        <div className="size">
          <div className="a">contentbswwwwwww</div>
        </div>
      </div>
    );
  }
}