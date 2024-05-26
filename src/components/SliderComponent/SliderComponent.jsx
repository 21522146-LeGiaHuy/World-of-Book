import React from 'react'
import { Image } from 'antd'
import Slider from "react-slick";

const SliderComponent = ({arrImages}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <Slider {...settings}>
            {arrImages.map((image) => {
                return (
                    <Image src={image} alt='slider' preview={false} width='100%' height='400px' />
                )
            })}
        </Slider>
    )
}

export default SliderComponent