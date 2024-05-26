<<<<<<< HEAD
import React, { Children } from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
=======
import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import FooterComponent from '../FooterComponent/FooterComponent'
>>>>>>> 7529782 (init project)

const DefaultComponent = ({children}) => {
  return (
    <div>
<<<<<<< HEAD
        <HeaderComponent/>
        {children}
=======
      <HeaderComponent />
      <div style={{ backgroundColor:'#F3FBFF', padding:'25px 120px' }}>
        {children}
      </div>
      <FooterComponent />
>>>>>>> 7529782 (init project)
    </div>
  )
}

export default DefaultComponent