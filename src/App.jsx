import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
// import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Menu />
          <Route exact path="/" component={Hero} />
          <Route path="/about" component={About} />
        </>
      </Router>
    )
  }
}

export default App
