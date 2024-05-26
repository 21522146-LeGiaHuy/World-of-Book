import React from 'react'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg'

function HomePage() {
  return (
    <div>
      <SliderComponent arrImages={[slider1, slider2, slider3]} />
    </div>
  )
}

export default HomePage