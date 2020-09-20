import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './App.scss';
import Landing from '../Landing/Landing'
import ImagePage from '../ImagePage/ImagePage'
import FavoritesPage from '../FavoritesPage/FavoritesPage'
import  { getImageByDate } from '../APICalls'
import { getPreviousWeek }from '../helpers.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      isLanding: false,
      todaysDate: 'no today',
      thisWeekDates: ['no week'],
      thisWeekImages: [],
      imagesLoaded: 0,
      searchDate: '',
      searchImage: {},
      userFavorites: [],
    }
  }

componentDidMount = async () => {
  console.log(this.state.userFavorites.length)
  setTimeout(() => {this.setState({ isLanding: false })}, 4000)
  const prevWeek = getPreviousWeek()
  const today = prevWeek[0]
  this.setState({ todaysDate: today, thisWeekDates: prevWeek })

  for (let day of prevWeek) {
    try {
      const thisWeekImages = this.state.thisWeekImages
      const dayImage = await getImageByDate(day)
      thisWeekImages.push(dayImage)
      this.setState({ thisWeekImages: thisWeekImages , imagesLoaded: thisWeekImages.length})
    } catch(error) {
      console.error(error)
    }
  }
}

favoriteImage = (image) => {
  let userFavorites = this.state.userFavorites
  userFavorites.push(image)
  this.setState({userFavorites: userFavorites })
}
  render() {
    return (
      <Router>
        <main className="App">
          <Route
          exact path = '/'
          render={() => {
            return(
              <div>
              {this.state.isLanding &&
                <Landing />
              }
              {!this.state.isLanding && this.state.thisWeekImages.length > 6 &&
                <ImagePage
                thisWeekImages={this.state.thisWeekImages}
                today={this.state.todaysDate}
                favoriteImage={this.favoriteImage}
                />
              }
              </div>
            )
          }}
          />
          <Route
          exact path = '/favorites'
          render={() => {
            return(
              <FavoritesPage
                userFavorites={this.state.userFavorites}
              />
            )
          }}
          />
        </main>
      </Router>
    );
  }
}

export default App;
