import React from 'react'
import useMedia from '../UseMedia'
import GridItem from './GridItem'
import './gallery.css'

const Gallery = ({ gallery }) => {
  const peopleLength = 37
  const placesLength = 39
  const isMobile = useMedia('(max-width: 480px)')

  const gridItems = []
  for (let i = 0; i < peopleLength; i++) {
    gridItems.push(<GridItem gallery={gallery} index={i + 1} columns={4} key={gallery + i} />)
  }

  console.log(gridItems)

  return (
    <div className="gallery-wrapper">
      <div className="gallery">{gridItems}</div>
    </div>
  )
}

export default Gallery
