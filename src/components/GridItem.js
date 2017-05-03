import React from 'react';

const GridPhoto = ({ url, padding, clickHandler, id }) => {
  const imagesContext = require.context('../', true, /^.*\.jpg$/)
  const styles = {
    gridItem: {
      display: 'inline-block',
      float: 'left',
      opacity: 0,
      animation: 'fadeIn .6s ease-in forwards',
      padding
    },
    itemWrapper: {
      position: 'relative',
      width: '100%',
      paddingBottom: '100%',
      background: `url(${imagesContext(url)}) no-repeat center center`,
      backgroundSize: 'cover',
      cursor: 'pointer'
    },
  };

  return (
    <div className="gridItem" style={styles.gridItem} >
      <a onClick={ clickHandler.bind(this, id) } >
        <div className="itemWrapper" style={styles.itemWrapper}></div>
      </a>
    </div>
  );
};

GridPhoto.propTypes = {
  url: React.PropTypes.string.isRequired,
  padding: React.PropTypes.number,
  clickHandler: React.PropTypes.func,
  id: React.PropTypes.number
};

export default GridPhoto;
