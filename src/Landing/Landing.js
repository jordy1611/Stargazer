import React from 'react';
import './Landing.scss';
import landingImage from '../assets/LandingJupiter.jpg'


const Landing = () => {
  return(
    <article className='landing'>
      <h1 className='title'>Stargazer</h1>
      <p>Explore The Stars Through NASA's Atronomy Picture Of The Day</p>
      <img className='landing-image' src={landingImage} alt='image of Jupiter' />
    </article>
  )
}

export default Landing
