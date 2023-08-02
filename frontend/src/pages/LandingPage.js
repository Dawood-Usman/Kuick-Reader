import React from 'react'
import Header from '../components/Header/Header'
import Slider from '../components/LandingPage/Slider'
import FeaturedProducts from '../components/LandingPage/FeaturedProducts'
import Footer from '../components/Footer'
import Categories from '../components/LandingPage/Categories'

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
