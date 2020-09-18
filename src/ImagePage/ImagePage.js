import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './ImagePage.scss';
import upArrow from '../assets/up-arrow.png'
import downArrow from '../assets/down-arrow.png'
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
          <article>
            <div className='left-image-page-column'>
              <div className='date-display'>
                <img src={upArrow} alt='up arrow'/>
                <p>{this.state.currentImage.date}</p>
                <img src={downArrow} alt='down arrow'/>
              </div>
              <input type='date'/>
              <p className='info-prompt'>Info</p>
            </div>
            <div className='mid-image-page-column'>
            <img className='large-image' alt={this.state.currentImage.title} src={this.state.currentImage.hdurl} />
              <div className='hidden-info'>
                <p>{this.state.currentImage.title}</p>
                <p>{this.state.currentImage.explanation}</p>
                <p>{this.state.currentImage.copyright || ''}</p>
              </div>
            </div>
            <div className='right-image-page-column'>
              <p className='favorite-toggle'>Favorite</p>
              <p className='my-favorites-toggle'>My Favorites</p>
            </div>
          </article>
        }
      </section>
    )
  }
}


export default ImagePage
