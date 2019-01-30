import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button } from 'antd';
import { REQUEST_ADVERTISINGLIST } from '@/reducers/home';
import img from '@/assets/yay.jpg'
export default @connect(state => {return { homeModel:state.home }})
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  requst(){
    const { dispatch } = this.props;
    //console.log(dispatch,'111')
    dispatch({
      type:REQUEST_ADVERTISINGLIST,
      payload:{
        page:1,
        rows:10,
        group_name:"",
        name:"",
        group_type:"",
        is_enable:""
      }
    })
  }
  render() {
    return (
      <div>
        <img src={img} />
        <Button type="primary" onClick={this.requst.bind(this)}>请求</Button>
      </div>
    )
  }
}