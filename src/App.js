import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import {Home} from './components';
import {About} from './components';
import {Contact} from './components';
import {Navigation} from './components';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Navigation />
  </div>
);

export default App;
