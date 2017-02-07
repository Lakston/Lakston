import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import './Menu.sass'
import Logo from '../assets/Logo.svg'
import LogoBlack from '../assets/Logo-black.svg'

export default class MenuMobile extends Component {
  static propTypes = {
    color: PropTypes.string,
  };
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      links: [
        {
          text: 'Urban',
          route: '/urban'
        },
          {
          text: 'People',
          route: '/people'
          },
        {
          text: 'About',
          route: '/about'
        }
        ]
    }
    this._toggleMenu = this._toggleMenu.bind(this)
  }
  _toggleMenu(e) {
    e.stopPropagation();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    let menuStatus = this.state.isOpen ? 'open' : ''
    const links = this.state.links.map((link, i) => <li key={i + 1} id='menu-mobile-link' ><Link to={link.route} onClick={this._toggleMenu}>{link.text}</Link></li>)
    return (
      <header className='top-mobile'>
        <div className='logo-mobile'>
          <Link to='/'>
            { this.props.color === 'black' ? <img src={LogoBlack} alt='logo'/> :  <img src={Logo} alt='logo'/>}
          </Link>
        </div>
          <div id="hambmenu" onClick={ this._toggleMenu } className={ menuStatus }>
            <span style={ this.props.color === 'black' ? {background: '#333'} : menuStatus === 'open' ? {background: '#333'} : {background: '#efefef'} }></span><span style={ this.props.color === 'black' ? {background: '#333'} : menuStatus === 'open' ? {background: '#333'} : {background: '#efefef'} }></span><span style={ this.props.color === 'black' ? {background: '#333'} : menuStatus === 'open' ? {background: '#333'} : {background: '#efefef'} }></span><span style={ this.props.color === 'black' ? {background: '#333'} : menuStatus === 'open' ? {background: '#333'} : {background: '#efefef'} }></span>
          </div>
        <div className={menuStatus} id='menu'>
        <div className='menu-content'>
          <ul>
           { links }
          </ul>
          <div className='icons'>
            <a href='https://www.instagram.com/lakston/' ><svg className="menu-mobile-icon insta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503.8 503.8"><path d="M256,49.5c67.3,0,75.2.3,101.8,1.5,24.6,1.1,37.9,5.2,46.8,8.7a78.1,78.1,0,0,1,29,18.8,78.1,78.1,0,0,1,18.8,29c3.4,8.9,7.6,22.2,8.7,46.8,1.2,26.6,1.5,34.5,1.5,101.8s-0.3,75.2-1.5,101.8c-1.1,24.6-5.2,37.9-8.7,46.8a83.4,83.4,0,0,1-47.8,47.8c-8.9,3.4-22.2,7.6-46.8,8.7-26.6,1.2-34.5,1.5-101.8,1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7a78.1,78.1,0,0,1-29-18.8,78.1,78.1,0,0,1-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s0.3-75.2,1.5-101.8c1.1-24.6,5.2-37.9,8.7-46.8a78.1,78.1,0,0,1,18.8-29,78.1,78.1,0,0,1,29-18.8c8.9-3.4,22.2-7.6,46.8-8.7,26.6-1.2,34.5-1.5,101.8-1.5m0-45.4c-68.4,0-77,.3-103.9,1.5S107,11.1,91,17.3A123.5,123.5,0,0,0,46.4,46.4,123.5,123.5,0,0,0,17.3,91c-6.2,16-10.5,34.3-11.7,61.2S4.1,187.6,4.1,256s0.3,77,1.5,103.9S11.1,405,17.3,421a123.5,123.5,0,0,0,29.1,44.6A123.5,123.5,0,0,0,91,494.7c16,6.2,34.3,10.5,61.2,11.7s35.4,1.5,103.9,1.5,77-.3,103.9-1.5,45.1-5.5,61.2-11.7A128.8,128.8,0,0,0,494.7,421c6.2-16,10.5-34.3,11.7-61.2s1.5-35.4,1.5-103.9-0.3-77-1.5-103.9S500.9,107,494.7,91a123.5,123.5,0,0,0-29.1-44.6A123.5,123.5,0,0,0,421,17.3c-16-6.2-34.3-10.5-61.2-11.7S324.4,4.1,256,4.1h0Z" fill="#333"></path><path d="M256,126.6A129.4,129.4,0,1,0,385.4,256,129.4,129.4,0,0,0,256,126.6ZM256,340a84,84,0,1,1,84-84A84,84,0,0,1,256,340Z" fill="#333"></path><circle cx="386.4" cy="117.4" r="30.2" fill="#333"></circle></svg></a>
            <a href='https://twitter.com/Lakston_photo'><svg className='menu-mobile-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 365.4"><path d="M450,43.4a184,184,0,0,1-53.1,14.3q30-18,40.5-50.8a181,181,0,0,1-58.5,22.3Q351.5,0,311.5,0q-38.3,0-65.2,27t-27,65.2a102.4,102.4,0,0,0,2.3,21.1A257,257,0,0,1,115.5,84.9,261.4,261.4,0,0,1,31.4,16.8,90.3,90.3,0,0,0,18.8,63.4a89.8,89.8,0,0,0,11.1,44,92.1,92.1,0,0,0,30,32.8,91.5,91.5,0,0,1-41.7-11.7v1.1q0,33.4,21,58.7a90.7,90.7,0,0,0,53,31.8,95.5,95.5,0,0,1-24.3,3.1,117.6,117.6,0,0,1-17.4-1.4,92.4,92.4,0,0,0,86.2,64Q86.5,325.2,22.3,325.2A196.3,196.3,0,0,1,0,324q64.2,41.4,141.6,41.4,49.1,0,92.2-15.6t73.7-41.7a278.9,278.9,0,0,0,52.7-60.1,268,268,0,0,0,33-70.9A262.1,262.1,0,0,0,404,103.1q0-8-.3-12A193.1,193.1,0,0,0,450,43.4Z" fill="#333"/></svg></a>
            {/* <svg className='menu-mobile-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.1 22.8"><path d="M29.9,4.1A2.5,2.5,0,0,0,28,3.3H4.2a2.5,2.5,0,0,0-1.8.8,2.5,2.5,0,0,0-.8,1.8V23.6a2.5,2.5,0,0,0,.8,1.8,2.5,2.5,0,0,0,1.8.8H28a2.6,2.6,0,0,0,2.6-2.6V5.9A2.5,2.5,0,0,0,29.9,4.1ZM28.6,23.6a0.5,0.5,0,0,1-.2.4l-0.4.2H4.2L3.8,24a0.5,0.5,0,0,1-.2-0.4V11.1l1.1,1.1,6.9,5.5L13,18.8l1.4,0.8a4.1,4.1,0,0,0,1.7.4h0a4.1,4.1,0,0,0,1.7-.4l1.4-.8,1.3-1.1,6.9-5.5,1.1-1.1V23.6h0Zm0-17.2V6.5a4,4,0,0,1-.8,2.1,7.6,7.6,0,0,1-1.6,1.9l-6.5,5.1-0.6.5-0.7.6-0.7.5-0.8.4H15.4l-0.8-.4-0.7-.5-0.7-.6-0.6-.5L6,10.6A5.7,5.7,0,0,1,3.6,5.9a0.5,0.5,0,0,1,.2-0.4l0.4-.2H28.5s0,0.1,0,.2V6.4h0Z" transform="translate(-1.6 -3.3)" fill="#333"/></svg> */}
          </div>
        </div>

        </div>

      </header>
    );
  }
}
