import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { history } from '@/store';
import { Router as HashRouter,Route,Switch } from 'react-router-dom';
import routes from '@/routes';

class App extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    const { store } = this.props.store;
    return(
      <Provider store={store}>
        <HashRouter history={history}>
          <Switch>
            {
              routes && routes.map((route,index)=> <Route exact path={route.path} component={route.component} key={index} />)
            }
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}
export default App;