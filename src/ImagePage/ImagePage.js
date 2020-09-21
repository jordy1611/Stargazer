import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink, Link } from 'react-router-dom';
import './ImagePage.scss';
import upArrow from '../assets/up-arrow.png'
import downArrow from '../assets/down-arrow.png'
import nasaLogo from '../assets/nasa.png'
import PropTypes from 'prop-types';

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

  favoriteToggle() {
    if (this.isFavorited('class') === 'unfavorited') {
    this.props.favoriteImage(this.state.currentImage);
  } else if (this.isFavorited('class') === 'favorited') {
    this.props.unFavoriteImage(this.state.currentImage)
  }
  }

  displayNextDay = () => {
    if (this.state.day < 6) {
      let nextDay = this.state.day
      nextDay++
      const nextImage = this.props.thisWeekImages[nextDay]
      this.setState({ day: nextDay, currentImage: nextImage })
    }
  }

  displayPreviousDay = () => {
    if (this.state.day > 0) {
      let prevDay = this.state.day
      prevDay--
      const prevImage = this.props.thisWeekImages[prevDay]
      this.setState({ day: prevDay, currentImage: prevImage })
    }
  }

  isFavorited(type) {
    const isFavorited = this.props.userFavorites.some(fav => fav.date === this.state.currentImage.date);
    if (type === 'class') {
      return isFavorited ? 'favorited' : 'unfavorited'
    } else if (type === 'text') {
      return isFavorited ? 'UnFavorite' : 'Favorite'
    }
  }

  render() {
    return (
      this.props.thisWeekImages.length > 6 ?
          <article className='image-page'>

              <div className='date-display'>
                { this.state.day > 0 &&
                  <nav className='up-arrow' onClick={this.displayPreviousDay}></nav>
                }
                <p className='current-date'>{this.state.currentImage.date}</p>
                { this.state.day < 6 &&
                  <nav className='down-arrow' onClick={this.displayNextDay}></nav>
                }
              </div>
              <p className='info-prompt'>Info</p>

              <div className='hidden-info'>
                <p className='hidden-title'>{this.state.currentImage.title}</p>
                <p className='hidden-explanation'>{this.state.currentImage.explanation}</p>
                { this.state.currentImage.copyright &&
                  <p className='hidden-copyright'>{this.state.currentImage.copyright}</p>
                }
              </div>
              <img className='large-image' alt={this.state.currentImage.title} src={this.state.currentImage.hdurl} />

              <p className={`favorite-toggle ${this.isFavorited('class')}`} onClick={() => {this.favoriteToggle(this.state.currentImage)}}>{this.isFavorited('text')}</p>
              <NavLink to='/favorites' className='my-favorites-navlink'><p className='my-favorites-text'>My Favorites</p></NavLink>

          </article>
      : <img className='nasa-logo' src={nasaLogo} alt='nasa logo'/>
    )
  }
}

ImagePage.propTypes = {
  thisWeekImages: PropTypes.array,
  today: PropTypes.string,
  userFavorites: PropTypes.array,
  favoriteImage: PropTypes.func,
  unFavoriteImag: PropTypes.func,
}

export default ImagePage
