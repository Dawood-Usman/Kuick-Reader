import React from 'react'
import Header from './Header'
import Slider from './Slider'
import FeaturedProducts from './FeaturedProducts'
import Footer from './Footer'
import Categories from './Categories'

function LandingPage() {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <Categories></Categories>
      <FeaturedProducts></FeaturedProducts>
      <Footer></Footer>
    </div>
  )
}

export default LandingPage
