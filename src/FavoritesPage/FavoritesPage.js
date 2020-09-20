import React, { Component } from 'react'
import './FavoritesPage.scss'
import Favorite from '../Favorite/Favorite'

class FavoritesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFavorites: []
    }
  }

  componentDidMount() {
    console.log('FAVORITES')
  }
  render() {
    return(
      <section className='favorites-page'>
        <Favorite/>
        <Favorite/>
        <Favorite/>
      </section>
    )
  }
}

export default FavoritesPage
