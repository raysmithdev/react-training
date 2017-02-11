import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import AboutText from './components/About/AboutText';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Main} >
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="about/:id" component={AboutText} />
    </Route>
  </Router>,
  document.getElementById('root')
);
