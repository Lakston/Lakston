import React, { Component, PropTypes } from 'react'

import store from '../Store'

import Grid from './Grid'
import Carousel from './Carousel'

export default class Gallery extends Component {
  static propTypes = {
    album: PropTypes.string.isRequired,
    isMobile: PropTypes.bool.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      showCarousel: false,
      albumThumbnails: `${this.props.album}Thumb`,
      albumItems: `${this.props.album}Big`,
      albumItemsMobile: `${this.props.album}Mob`,
      itemIndex: null,
      isFullscreen: false
    }
    this._handleItemClick = this._handleItemClick.bind(this)
    this._handleClickNext = this._handleClickNext.bind(this)
    this._handleClickPrev = this._handleClickPrev.bind(this)
    this._handleClickClose = this._handleClickClose.bind(this)
    this._handleKeyNav = this._handleKeyNav.bind(this)
    this._toggleFullScreen = this._toggleFullScreen.bind(this)
  }
  componentDidMount() {
    window.addEventListener('keydown', this._handleKeyNav)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this._handleKeyNav)
  }
  _handleItemClick(id, e) {
    this.setState({
      showCarousel: true,
      itemIndex: id - 1
    })
  }
  _handleClickNext(item) {
    if((item + 1) < store[this.state.albumItems].length) {
      this._slideRight()
    }
  }
  _handleClickPrev(item) {
    if((item - 1) >= 0) {
      this._slideLeft()
    }
  }
  _handleClickClose() {
      this.setState({
        showCarousel: false
      })
  }
  _handleKeyNav(e) {
    const LEFT = 37
    const RIGHT = 39
    const ESC = 27
    const KEY = e.keyCode

    switch(KEY) {
      case (LEFT) :
         this.state.itemIndex > 0 ? this._slideLeft() : null
        break
      case(RIGHT):
        this.state.itemIndex < store[this.state.albumItems].length - 1 ? this._slideRight() : null
        break
      case(ESC):
        this.setState({showCarousel: false})
        break
    }
  }
  _slideLeft() {
    this.setState({
      itemIndex: this.state.itemIndex - 1
    })
  }
  _slideRight() {
    this.setState({
      itemIndex: this.state.itemIndex + 1
    })
  }
  _toggleFullScreen() {
    if (this.state.isFullscreen) {
      this._exitFullScreen();
    } else {
      this._fullScreen();
    }
}
_fullScreen() {
    const carousel = document.getElementById('carousel')

    if (carousel.requestFullscreen) {
      carousel.requestFullscreen();
    } else if (carousel.msRequestFullscreen) {
      carousel.msRequestFullscreen();
    } else if (carousel.mozRequestFullScreen) {
      carousel.mozRequestFullScreen();
    } else if (carousel.webkitRequestFullscreen) {
      carousel.webkitRequestFullscreen();
    }
    this.setState({isFullscreen: true});
  }

  _exitFullScreen() {
    if (this.state.isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      this.setState({isFullscreen: false});
    }
}
  render() {
    return (
      <div>
        <Grid images={store[this.state.albumThumbnails]} columns={[ 1, 2, 5 ]} padding={4} onClick={this._handleItemClick}/>
        { this.state.showCarousel ? <Carousel initialItem={this.state.itemIndex} itemArray={this.props.isMobile ? store[this.state.albumItemsMobile] : store[this.state.albumItems]} clickNext={this._handleClickNext} clickPrev={this._handleClickPrev} clickClose={this._handleClickClose}  isMobile={this.props.isMobile ? true : false} clickFull={this._toggleFullScreen}/> : null}
      </div>
    );
  }
}
