import React from 'react'
import useMedia from './UseMedia'

function Hero() {
  const small = useMedia('(max-width: 480px)')
  const large = useMedia('(min-width: 800px)')
  const landscape = useMedia('(orientation: landscape)')

  let format
  if (small) {
    format = landscape ? 'mobile-landscape' : 'mobile'
  } else if (large) {
    format = 'full'
  } else {
    format = landscape ? 'tablet-landscape' : 'tablet'
  }

  const imagesContext = process.env.PUBLIC_URL + '/images/hero'
  const randomImage = Math.floor(Math.random() * 3) + 1
  const url = `${imagesContext}/hero-${format}-${randomImage}.jpg`

  const heroStyles = {
    background: `url(${url}) center center / cover no-repeat fixed`,
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    animation: `fadeIn .4s ease-in forwards`
  }

  return (
    <div>
      <div className="hero" style={heroStyles} />
    </div>
  )
}

export default Hero
