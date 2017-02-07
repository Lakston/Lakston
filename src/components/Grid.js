import React from 'react';

import GridItem from './GridItem'

const Grid = ({ images, padding = 0, columns = [1, 2, 3], onClick }) => {
  const imagesArray = images.slice()
  const imageNodes = imagesArray.map((item, i) => {
    return (
      <GridItem key={i} url={item} columns={columns} padding={padding} clickHandler={onClick} id={i + 1} />
    );
  });

  const cssBreakpoints = `
    .gridItem { width: ${Math.floor(100 / columns[0])}%; }

    @media only screen and (min-width : 480px) {
      .gridItem { width: ${Math.floor(100 / columns[1])}%; }
    }
    @media only screen and (min-width : 992px) {
      .gridItem { width: ${Math.floor(100 / columns[2])}%; }
    }
  `;

  const cssGridStyle = {width: '90%', margin: '0 auto'}

  return (
    <div className='grid' style={cssGridStyle}>
      <style dangerouslySetInnerHTML={{ __html: cssBreakpoints }} />
      {imageNodes}
    </div>
  );
};

Grid.propTypes = {
  images: React.PropTypes.object.isRequired,
  columns: React.PropTypes.array,
  padding: React.PropTypes.number,
};

export default Grid;
