import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './App.scss';
import Landing from '../Landing/Landing'
import ImagePage from '../ImagePage/ImagePage'
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
    }
  }

componentDidMount = async () => {
  // setTimeout(() => {this.setState({ isLanding: false })}, 4000)
  const prevWeek = getPreviousWeek()
  const today = prevWeek[0]
  this.setState({ todaysDate: today, thisWeekDates: prevWeek })
  // try {
  //   let thisWeekImages = this.state.thisWeekImages
  //   thisWeekImages.push( await getImageByDate(today))
  //   this.setState({ thisWeekImages: thisWeekImages })
  // } catch(error) {
  //   console.error(error)
  // }

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

  // for (let i = 0; i < 7; i++) {
  //   console.log(this.state.thisWeekDates[0])
  //   try {
  //     const thisWeekImages = this.state.thisWeekImages
  //     const imageToday = await getImageByDate(this.state.thisWeekDates[i])
  //     thisWeekImages[i] = imageToday
  //     await this.setState({ thisWeekImages: thisWeekImages })
  //   } catch(error) {
  //     console.error(error)
  //   }
  // }
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
                />
              }
              </div>
          )
          }}/>
        </main>
      </Router>
    );
  }
}

export default App;
