import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './HomePage.scss';
import Landing from '../Landing/Landing'
import ImagePage from '../ImagePage/ImagePage'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: {},
      day: 0,
      thisWeekImages: []
    };
  }

  componentDidMount() {
    this.getImageOfDay()
    this.setState({ thisWeekImages: this.props.thisWeekImages})
    if(this.props.thisWeekImages.length > 0) {
      console.log('success')
    }
  }

  getImageOfDay() {
    (this.props.thisWeekImages[0]) ? console.log('it exists') : console.log('it does not exist')
  }

  backOneDay = () => {
    console.log(this.state.thisWeekImages)
  }

  render() {
    return(
      <section className='home-page'>
        {this.state.isLanding &&
          <Landing/>
        }
        {!this.state.isLanding && this.state.thisWeekImages.length === 7 &&
          <ImagePage
          image={this.props.thisWeekImages[this.state.day]}
          backOneDay={this.backOneDay}
          />
        }
      </section>
    )
  }
}


export default HomePage
