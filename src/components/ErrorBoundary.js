import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props){
    super(props)
  }
  componentDidCatch(error,info){
    console.log(error,info)
  }
  render(){
    return this.props.children
  }
}
export default ErrorBoundary;