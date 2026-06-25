import React from 'react'
import HeroSection from '../components/homeComps/HeroSection'
import MainCategories from '../components/homeComps/MainCategories'
import FeaturedVenues from '../components/homeComps/FeaturedVenues'
import PremiumVenueHighlightAdSec from '../components/PremiumVenueHighlightAdSec'
import DiscoverVenueTypes from '../components/homeComps/DiscoverVenueAtmosTypes/DiscoverVenueAtmosTypes'
import LatestVenueNews from '../components/homeComps/LatestVenueNews/LatestVenueNews'
import Footer from '../components/Footer'
import HowBookingWorks from '../components/homeComps/HowBookingWorks/HowBookingWorks'
import QuickFeedbackSection from '../components/homeComps/QuickFeedbackSection/QuickFeedbackSection'
import BecomeVenuePartner from '../components/homeComps/BecomeVenuePartner'
import VenuesInLocation from '../components/homeComps/VenuesInLocation'

const Home = () => {
  return (
    <div className=''>
      {/* <HeroSection/> */}
      
      <MainCategories/>
      <VenuesInLocation/>
      <FeaturedVenues/>
      <PremiumVenueHighlightAdSec/>
      <DiscoverVenueTypes/>
      <LatestVenueNews/>
      <HowBookingWorks/>
      <QuickFeedbackSection/>
      <BecomeVenuePartner/>
      <Footer/>
      
    </div>
  )
}

export default Home