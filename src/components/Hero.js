import React from 'react';
import Media from 'react-media'

import Menu from './Menu'
import MenuMobile from './MenuMobile'

const Hero = (props) => {
  const imagesContext = require.context('../static/media/photos', false, /^.*\.jpg$/)
  const randomImage = Math.floor(Math.random() * 3) + 1
  const cssBreakpoints = `
    .hero { background: url(${imagesContext('./HeroMobile-' + randomImage + '.jpg')}) no-repeat 50% 20% fixed;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0 }

    @media only screen and (min-width : 480px) {
      .hero { background: url(${imagesContext('./HeroTablet-' + randomImage + '.jpg')}) no-repeat 50% 20% fixed;
      background-size: cover;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0 }
    }
    @media only screen and (min-width : 992px) {
      .hero { background: url(${imagesContext('./Hero-' + randomImage + '.jpg')}) no-repeat center center fixed;
      background-size: cover;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      opacity: 0;
      animation: fadeIn .4s ease-in forwards; }
    }
  `;

  return (
    <div>
      <Media query={{maxWidth: 1000}}>
        {matches => matches ? (<MenuMobile color={randomImage === 3 ? 'black' : 'white'}/>) : (<Menu color='white'/>)}
      </Media>
      <style dangerouslySetInnerHTML={{ __html: cssBreakpoints }} />
      <div className='hero'></div>
    </div>
    );
}

export default Hero
