import React, { Component } from 'react';
import './Landing.scss';
import landingImage from '../assets/landing-jupiter.jpg'


class Landing extends Component {
  constructor() {
    super();
    this.state = {
      displayTitle: true,
    }
  }

  componentDidMount = async()  => {
    await setTimeout(() => {this.setState({ displayTitle: false })}, 3000)

  }

  render() {
    return(
      <article className='landing'>
      <img className='landing-image' src={landingImage} alt='image of Jupiter' />
      { this.state.displayTitle &&
        <div>
        <h1 className='landing-title'>STARGAZER</h1>
        <p className='landing-description'>Explore The Stars</p>
        </div>
      }
      </article>
    )
  }
}

export default Landing
