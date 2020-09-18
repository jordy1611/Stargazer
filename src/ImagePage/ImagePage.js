import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './ImagePage.scss';
import upArrow from '../assets/up-arrow.png'
import downArrow from '../assets/down-arrow.png'
import nasaLogo from '../assets/nasa.png'
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
    return (
      this.props.thisWeekImages.length > 6 ?
          <article className='image-page'>

              <div className='date-display'>
                <img className='up-arrow' src={upArrow} alt='up arrow'/>
                <p className='current-date'>{this.state.currentImage.date}</p>
                <img className='down-arrow' src={downArrow} alt='down arrow'/>
              </div>
              <input className='date-input' type='date' placeholder='search'/>
              <p className='info-prompt'>Info</p>

              <div className='hidden-info'>
                <p className='hidden-title'>{this.state.currentImage.title}</p>
                <p className='hidden-explanation'>{this.state.currentImage.explanation}</p>
                <p className='hidden-copyright'>{this.state.currentImage.copyright || ''}</p>
              </div>
              <img className='large-image' alt={this.state.currentImage.title} src={this.state.currentImage.hdurl} />

              <p className='favorite-toggle'>Favorite</p>
              <p className='my-favorites-link'>My Favorites</p>

          </article>
      : <img className='nasa-logo' src={nasaLogo} alt='nasa logo'/>
    )
  }
}


export default ImagePage
