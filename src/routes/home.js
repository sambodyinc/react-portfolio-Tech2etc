import React from 'react'
import Navbar from '../components/navbar'
import Heroimg from '../components/heroimg'
import Pricing from '../components/pricing'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default Home