import React from 'react'
import { Footer, Navbar } from './components'
import { About, Explore, Feedback, GetStarted, Hero, Insight, WhatsNew, World } from './pages'

const App = () => {
  return (
    <div className='bg-primary-black overflow-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insight />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App