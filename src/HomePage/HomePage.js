import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './HomePage.scss';
import Landing from '../Landing/Landing'
import ImagePage from '../ImagePage/ImagePage'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLanding: false,
    };
  }

  componentDidMount() {
    // setTimeout(() => {this.setState({ isLanding: false })}, 4000)
  }

  render() {
    return(
      <section className='home-page'>
        {(this.state.isLanding &&
          <Landing/>
        ) ||
        <ImagePage
        />
        }
      </section>
    )
  }
}


export default HomePage
