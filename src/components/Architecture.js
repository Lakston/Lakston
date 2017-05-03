import React from 'react'
import Media from 'react-media'

import Menu from './Menu'
import MenuMobile from './MenuMobile'
import Gallery from './Gallery'

const Architecture = () => (
  <Media query={{maxWidth: 1000}}>
    {matches => matches ? (
      <div>
      <MenuMobile color='black'/>
      <Gallery album='architecture' isMobile/>
      </div>
    ) : (
      <div>
      <Menu color='black'/>
      <Gallery album='architecture' isMobile={false}/>
      </div>
    )}
  </Media>
  );

export default Architecture
