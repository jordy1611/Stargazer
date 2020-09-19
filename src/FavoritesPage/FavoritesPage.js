import React, { Component } from 'react'
import 'FavoritesPage.scss'
import Favorite from '../Favorite/Favorite'

class FavoritePage extends Component {
  contructor(props) {
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
