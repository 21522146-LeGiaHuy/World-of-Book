import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

const DefaultComponent = ({children}) => {
  return (
    <div>
      <HeaderComponent />
      <div style={{ backgroundColor:'#F3FBFF', padding:'25px 120px' }}>
        {children}
      </div>
      <FooterComponent />
    </div>
  )
}

export default DefaultComponent