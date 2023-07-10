import React, { Component } from 'react'
import { Typography, Grid } from '@mui/material'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 6000,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    }

    return (
      <div>
        <div>
          <Typography variant='h4' sx={{ mt: 6, textAlign: 'center', mb: 4 }}>
            Skills
          </Typography>
          <Slider {...settings}>
            <div className='carousel-container'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhvCVjQsBPEzE079yBU4v6sm0C1gHcTA9tCeCX0n2pEVCeuDd81V_et3t0mnh4fvFwaQI&usqp=CAU'
                alt='mongodb'
                className='carousel-img'
              />
            </div>
            <div className='carousel-container'>
              <img
                src='https://nodejs.org/images/logos/nodejs-dark.png'
                alt='mongodb'
                className='carousel-img'
              />
            </div>
            <div className='carousel-container'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzEEM1GfefDKYXt69oiF4Ny9gQbcumI3Pmg&usqp=CAU'
                alt='mongodb'
                className='carousel-img'
              />
            </div>
            <div className='carousel-container'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW44qUD0U1nea22aYEkfeeWPGyWbHnrzi6hw&usqp=CAU'
                alt='mongodb'
                className='carousel-img'
              />
            </div>
            <div className='carousel-container'>
              <img
                src='https://cdn1.epicgames.com/ue/product/Screenshot/Slide1.PNG-1920x1080-160df0b6db5b5e9131397f6dbe8289d2.jpg?resize=1&w=1920'
                alt='mongodb'
                className='carousel-img'
              />
            </div>
            <div className='carousel-container'>
              <img
                src='https://tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg'
                alt='mongodb'
                className='carousel-img'
              />
            </div>
            <div className='carousel-container'>
              <img
                src='https://zontroy.com/wp-content/uploads/2022/03/javascript.jpg'
                alt='mongodb'
                className='carousel-img'
              />
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}
