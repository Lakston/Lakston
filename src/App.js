import React from 'react'
import ReactDOM from "react-dom"
import { HashRouter as Router, Match, Miss, history } from 'react-router'

import Hero from './components/Hero'
import People from './components/People'
import Architecture from './components/Architecture'
import About from './components/About'

// require.context("./assets/photos", true)

const App = () => (

  <Router history={ history }>
    <div>
      <Match exactly pattern='/' component={ Hero } />
      <Match  pattern='/people'  component={ People } />
      <Match  pattern='/urban'  component={ Architecture } />
      <Match  pattern='/about'  component={ About } />
    </div>
  </Router>
  );

App.propTypes = {

      };

export default App


ReactDOM.render(<App />, document.getElementById('app'));
