import React, { Component } from 'react';
import GlobalStyles from './GlobalStyles';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <article>
        <Router />
        <GlobalStyles />    
      </article>
    );
  }
}

export default App;