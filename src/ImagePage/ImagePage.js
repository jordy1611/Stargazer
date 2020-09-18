import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './ImagePage.scss';
// import Landing from '../Landing/Landing'
// import ImagePage from '../ImagePage/ImagePage'

class ImagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: {},
      day: 0,
      thisWeekImages: []
    };
  }

  componentDidMount() {
    this.setState({ thisWeekImages: this.props.thisWeekImages})
    this.setState({ currentImage: this.props.thisWeekImages[0]})
    if(this.props.thisWeekImages.length > 6) {
    }
  }

  getImageOfDay() {
    console.console.log('getImageOfDay');
    // this.setState({currentImage: this.props.thisWeekImages[this.state.day]})
  }

  displayNextDay() {
    const nextDay = this.state.day + 1
    console.log(nextDay)
  }

  render() {
    return(
      <section className='home-page'>
        {this.state.thisWeekImages.length > 6 &&
          <div>
          <h1>ImagePage</h1>
          <img className='large-image' alt={this.state.currentImage.explanation} src={this.state.currentImage.hdurl} onClick={this.displayNextDay}/>
          </div>
        }
      </section>
    )
  }
}


export default ImagePage
