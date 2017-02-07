import React from 'react'
import Media from 'react-media'

import Menu from './Menu'
import MenuMobile from './MenuMobile'
import Gallery from './Gallery'

const People = (props) => (

    <Media query={{maxWidth: 1000}}>
      {matches => matches ? (
        <div>
        <MenuMobile color='black'/>
        <Gallery album='people' isMobile/>
        </div>
      ) : (
        <div>
        <Menu color='black'/>
        <Gallery album='people' isMobile={false}/>
        </div>
      )}
    </Media>


  );

People.propTypes = {

      };

export default People
