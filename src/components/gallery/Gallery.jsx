import React from 'react'
import useMedia from '../UseMedia'
import GridItem from './GridItem'

const Gallery = ({ gallery }) => {
  const galleriesPhotos = { people: 37, places: 39 }

  const isMobile = useMedia('(max-width: 480px)')
  const isDesktop = useMedia('(min-width: 900px)')

  let columns = 3
  if (isMobile) {
    columns = 1
  } else if (isDesktop) {
    columns = 4
  }

  const gridItems = []
  for (let i = 0; i < galleriesPhotos[gallery]; i++) {
    gridItems.push(<GridItem gallery={gallery} index={i + 1} columns={columns} key={gallery + i} />)
  }

  const styles = {
    wrapper: {
      margin: '200px auto',
      width: '90%',
      maxWidth: '1400px'
    },
    gallery: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      textAlign: 'center',
      margin: '-1rem'
    }
  }

  return (
    <div className="gallery-wrapper" style={styles.wrapper}>
      <div className="gallery" style={styles.gallery}>
        {gridItems}
      </div>
    </div>
  )
}

export default Gallery
