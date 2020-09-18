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

  displayNextDay = () => {
    if (this.state.day < 6) {
      const nextDay = this.state.day + 1
      const nextImage = this.props.thisWeekImages[nextDay]
      this.setState({ currentImage: nextImage })
    }
  }

  displayPreviousDay = () => {
    if (this.state.day > 0) {
      const prevDay = this.state.day - 1
      const prevImage = this.props.thisWeekImages[prevDay]
      this.setState({ currentImage: prevImage })
    }
  }

  render() {
    return(
      <section className='home-page'>
        {this.props.thisWeekImages.length > 6 &&
          <div>
          <h1>ImagePage</h1>
          <img className='large-image' alt={this.state.currentImage.explanation} src={this.state.currentImage.hdurl} />
          </div>
        }
      </section>
    )
  }
}


export default ImagePage
