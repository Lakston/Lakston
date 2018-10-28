import React from 'react'

const GridItem = ({ gallery, index, columns }) => {
  const url = `${process.env.PUBLIC_URL}/images/${gallery}/thumbnail-${index}.jpg`

  const styles = {
    container: {
      width: `calc(${100 / columns}% - .5rem)`,
      margin: '0 0.25rem .5rem 0.25rem',
      borderRadius: '2px',
      overflow: 'hidden'
    },
    gridItem: {
      width: '100%',
      paddingBottom: '100%',
      background: `url(${url}) center center / cover no-repeat`
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.gridItem} />
    </div>
  )
}

export default GridItem
