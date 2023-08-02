import React from 'react'
import { HeroSection } from '../components/HeroSection'

export const Home = () => {
  const data = {
    name: "Sahu Store"
  }
  return (
    <HeroSection myData={data}/>
  )
}

