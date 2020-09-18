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
      currentImage: {},
      day: 0,
      thisWeekImages: []
    };
  }

  componentDidMount() {
    // setTimeout(() => {this.setState({ isLanding: false })}, 4000)
    this.getImageOfDay()
    this.setState({ thisWeekImages: this.props.thisWeekImages})
    if(this.props.thisWeekImages.length > 0) {
      console.log('success')
    }
    // this.setState({ currentImage: 'fucks' })

  }

  getImageOfDay() {
    (this.props.thisWeekImages[0]) ? console.log('it exists') : console.log('it does not exist')
  }

  backOneDate = () => {
    let num = this.state.day + 1;
    this.setState( {day : num })
  }

  render() {
    return(
      <section className='home-page'>
        {this.state.isLanding &&
          <Landing/>
        }
        {!this.state.isLanding && this.state.thisWeekImages.length > 0 &&
          <ImagePage
          image={this.props.thisWeekImages[0]}/>
        }
      </section>
    )
  }
}


export default HomePage
