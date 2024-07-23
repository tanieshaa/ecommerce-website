import React from 'react'
import Hero from '../Components/Hero/Hero'
import Mains from '../Components/Mains/Mains'
import Offers from '../Components/Offers/Offers'
import JustIn from '../Components/JustIn/JustIn'
import Newsletter from '../Components/Newsletter/Newsletter'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Mains/>
      <Offers/>
      <JustIn/>
      <Newsletter/>
    </div>
  )
}

export default Home
