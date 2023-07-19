import React from 'react'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import Who from '../components/Who'
import Board from '../components/Board'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <div>
        <h2 className='text-center'>Our Top Service</h2>
      </div>
      <Card/>
      <div className='bg-primary '>
        <h2 className='text-center'>Who we are</h2>
      </div>
      <Who/>
      <div>
      <Board/>
      
      </div>
    </div>
  )
}

export default Home
