import React from 'react'
import { Container } from '../components'
import {  Hero, Recommendations, InsightsAndTools, ProductsInterested, TechnologyAndConsulting, Inside, NextSteps } from '../Container';

function Home() {
  return (
    <div className='max-w-[1440px] mx-auto w-full'>
      <Hero />
      <Recommendations />
      <InsightsAndTools /> 
      <ProductsInterested /> 
      <TechnologyAndConsulting /> 
      <Inside /> 
      <NextSteps />
    </div>
  )
}

export default Home