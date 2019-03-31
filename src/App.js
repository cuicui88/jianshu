import React, { Component } from 'react';
import Header from './common/header/index.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import {Provider} from 'react-redux';
import store from './store';
import {Globalstyle} from './style';
import {Globalstyleicon} from './statics/iconfont/iconfont.js';
class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          
          <BrowserRouter>
            <div>
            <Header/>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
          <Globalstyle/>
          <Globalstyleicon/>
        </Provider>
      </div>
    );
  }
}

export default App;
