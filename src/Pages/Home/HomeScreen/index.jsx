import HeroSection from "../HeroSection";
import React from 'react'
import MySkills from "../MySkills";
import AboutMe from "./About";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testinomials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

const index = () => {
  return (
    <div>
        <HeroSection/>
        <MySkills/>
        <AboutMe/>
        <MyPortfolio/>
      <Testimonial/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default index
