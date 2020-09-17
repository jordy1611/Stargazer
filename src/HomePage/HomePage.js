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
      dayCounter: 0,
      thisWeekImages: this.props.thisWeekImages
    };
    this.thisWeekImages = this.props.thisWeekImages
  }

  componentDidMount() {
    console.log('before all', this.props.thisWeekImages)
    console.log('all', this.state.thisWeekImages)
    // setTimeout(() => {this.setState({ isLanding: false })}, 4000)
    // this.setState({ thisWeekImages: this.props.thisWeekImages });
    const currentImage = this.thisWeekImages['0']
    console.log('current',currentImage)
    this.setState({ currentImage: currentImage })
    console.log('2',this.state)
  }

  render() {
    return(
      <section className='home-page'>
        {(this.state.isLanding &&
          <Landing/>
        ) ||
        <ImagePage
          image={this.state.currentImage}
        />
        }
      </section>
    )
  }
}


export default HomePage
