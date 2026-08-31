import React from 'react'
import Blogs from '../components/Blogs'
import BrowseCategory from '../components/BrowseCategory'
import Community from '../components/Community'
import Discover from '../components/Discover'
import Explore from '../components/Explore'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Reasons from '../components/Reasons'
import Teaching from '../components/Teaching'

const Home = () => {
  return (
    <div className='h-full'>
      <Navbar />
      <Hero />
      <Explore />
      <Discover />
      <BrowseCategory />
      <Reasons />
      <Community />
      <Teaching />
      <Blogs />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home