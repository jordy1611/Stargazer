import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './FavoritesPage.scss'
import Favorite from '../Favorite/Favorite'

class FavoritesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFavorites: []
    }
  }

  renderFavorites() {
    this.props.userFavorites.sort((a, b) => {
      if (a.date > b.date) {
        return -1
      } else if (a.date < b.date) {
        return 1
      } else {
        return 0
      }
    });

    return this.props.userFavorites.map(favorite => {
      return (
        <Favorite
          favorite={favorite}
        />
      )
    })
  }

  componentDidMount() {
    console.log('FAVORITES')
  }

  render() {
    return(
      <section className='favorites-page'>
        <h2 className='favorites-title'>My Favorites</h2>
        <p className='favorites-instructions'>Hover Over Image To See Info</p>
        <Link to='/'><nav className='home-toggle'>Home</nav></Link>
        <section className='favorites-container'>
          {this.renderFavorites()}
        </section>
      </section>
    )
  }
}

export default FavoritesPage
