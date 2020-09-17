import React from 'react';
import './Landing.scss';
import landingImage from '../assets/landing-jupiter.jpg'


const Landing = () => {
  return(
    <article className='landing'>
    <img className='landing-image' src={landingImage} alt='image of Jupiter' />
      <h1 className='landing-title'>Stargazer</h1>
      <p className='landing-description'>Explore The Stars</p>
    </article>
  )
}

export default Landing
