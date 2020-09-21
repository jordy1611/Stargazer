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
        <Link to='/'><nav className='home-toggle'>Home</nav></Link>
        <section className='favorites-container'>
          {this.renderFavorites()}
        </section>
      </section>
    )
  }
}

export default FavoritesPage
