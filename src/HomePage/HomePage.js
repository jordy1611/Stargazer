import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './HomePage.scss';
import Landing from '../Landing/Landing'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLanding: true,
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
