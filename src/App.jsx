import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/gallery/Gallery'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Menu />
          <Route exact path="/" component={Hero} />
          <Route path="/places" render={routeProps => <Gallery {...routeProps} gallery="places" />} />
          <Route path="/people" render={routeProps => <Gallery {...routeProps} gallery="people" />} />
          <Route path="/about" component={About} />
        </>
      </Router>
    )
  }
}

export default App
