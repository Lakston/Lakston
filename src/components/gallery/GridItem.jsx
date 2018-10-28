import React from 'react'

const GridItem = ({ gallery, index, columns }) => {
  const url = `${process.env.PUBLIC_URL}/images/${gallery}/thumbnail-${index}.jpg`
  const style = {
    cursor: 'pointer',
    objectFit: 'cover'
  }
  return (
    <div
      style={{
        width: `calc(${100 / columns}% - 1rem)`,
        height: '200px',
        background: `url(${url}) center center / cover no-repeat`,
        margin: '.5rem',
        paddingBottom: '50%'
      }}
    >
      {/* <img src={url} alt="" style={style} /> */}
    </div>
  )
}

export default GridItem
