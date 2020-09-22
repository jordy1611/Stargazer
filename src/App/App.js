import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.scss';
import Landing from '../Landing/Landing'
import ImagePage from '../ImagePage/ImagePage'
import FavoritesPage from '../FavoritesPage/FavoritesPage'
import  { getAllImages } from '../APICalls'
import { getPreviousWeek } from '../helpers.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      isLanding: true,
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
  setTimeout(() => {this.setState({ isLanding: false })}, 3500)
  const prevWeek = getPreviousWeek()
  const today = prevWeek[0]
  this.setState({ todaysDate: today, thisWeekDates: prevWeek })
  try {
    const thisWeekImages = await getAllImages(prevWeek)
    this.setState({ thisWeekImages: thisWeekImages , imagesLoaded: thisWeekImages.length})
  } catch(error) {
  }
}

favoriteImage = (image) => {
    let userFavorites = this.state.userFavorites
    userFavorites.push(image)
    this.setState({userFavorites: userFavorites })
}

unFavoriteImage = (image) => {
  let userFavorites = this.state.userFavorites
  const index = userFavorites.indexOf(image)
  userFavorites.splice(index, 1)
  this.setState({ userFavorites: userFavorites })
}

filterRoutes(route) {
  console.log(route)
}

  render() {
    return (
      <Router>
        <main className="App">
          <Switch>
            <Route
            exact path= '/'
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
                      userFavorites={this.state.userFavorites}
                      favoriteImage={this.favoriteImage}
                      unFavoriteImage={this.unFavoriteImage}
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
            <Route>
              <Redirect to=''/>
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
