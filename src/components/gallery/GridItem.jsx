import React from 'react'

const GridItem = ({ gallery, index, columns }) => {
  const url = `${process.env.PUBLIC_URL}/images/${gallery}/thumbnail-${index}.jpg`

  const styles = {
    container: {
      width: `calc(${100 / columns}% - .5rem)`,
      margin: '0 0.25rem .5rem 0.25rem',
      borderRadius: '2px',
      overflow: 'hidden',
      animation: 'fadeIn .5s ease-in'
    },
    gridItem: {
      width: '100%',
      objectFit: 'cover',
      height: '100%'
    }
  }

  return (
    <div style={styles.container}>
      <img src={url} style={styles.gridItem} alt="gallery" />
    </div>
  )
}

export default GridItem
