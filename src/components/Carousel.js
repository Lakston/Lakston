import React, { PropTypes } from 'react'

import './Carousel.sass'

const Carousel = ({initialItem, itemArray, clickNext, clickPrev, clickClose, isMobile, clickFull}) => {
  const imagesContext = require.context('../', true, /^.*\.jpg$/)
  const styles = {
    carousel: {
      position: 'fixed',
      zIndex: '10',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      background: 'rgba(0,0,0,.92)',
    },
    image: {
      position: 'absolute',
      zIndex: '5',
      top: `${isMobile ? '46%' : '50%'}`,
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: `${isMobile ? '95vw' : '90vw'}`,
      maxHeight: `${isMobile ? '87vh' : '90vh'}`,
      margin: '0 auto',
      userSelect: 'none',
      opacity: 0,
      animation: 'fadeIn .6s ease-in forwards'
    }
  }

  let url = itemArray[initialItem]
  return (
    <div id='carousel' style={styles.carousel}>
      <img src={imagesContext(url)} style={styles.image} alt='' />
      <div className='next-button' onClick={clickNext.bind(this, initialItem)}></div>
      <div className='prev-button' onClick={clickPrev.bind(this, initialItem)}></div>
      <div className='close-button' onClick={clickClose}></div>
      <div className='carousel-nav'>
        <div className='carousel-infos'>{ initialItem < 9 ? `0${initialItem + 1}` : initialItem + 1} of {itemArray.length}</div>
        <div className='carousel-thumb' onClick={clickClose}>
          <svg className='carousel-icon' width="15" height="15"><path d="M0,3h7v4H0V3z M0,8h7v4H0V8z M8,3h7v4H8V3z M8,8h7v4H8V8z" strokeWidth="0" fill="#ffffff" stroke="none"></path></svg><span>THUMBNAILS</span></div>
        <div className='carousel-full' onClick={clickFull}>
          <svg className='carousel-icon' width="15" height="12"><path d="M0,0h15v9H0V0z M2,2v5h11V2H2z" strokeWidth="0" fill="#ffffff" stroke="none"></path></svg><span>FULLSCREEN</span></div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  initialItem: PropTypes.number.isRequired,
  itemArray: PropTypes.object.isRequired,
  clickPrev: PropTypes.func.isRequired,
  clickNext: PropTypes.func.isRequired,
  clickClose: PropTypes.func.isRequired,
      };

export default Carousel
