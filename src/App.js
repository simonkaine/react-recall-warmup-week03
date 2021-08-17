import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './home.js';
import Header from './header.js';
import DogsPage from './dogs.js';
import CatsPage from './cats.js';
import './warmup.css';

class App extends Component {

  render() { 
    return ( 
      <section className="mainApp">

      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/cats" component={CatsPage}></Route>
          <Route path="/dogs" component={DogsPage} />
          <Route path="/" exact component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
    </section>
     );
  }
}
 
export default App;