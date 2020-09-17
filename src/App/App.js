import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './App.scss';
import Landing from '../Landing/Landing'
import HomePage from '../HomePage/HomePage'
import  { getImageByDate } from '../APICalls'
import { getPreviousWeek }from '../helpers.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      todaysDate: 'no today',
      thisWeekDates: ['no week'],
      thisWeekImages: [],
      imagesLoaded: 0,
      searchDate: '',
      searchImage: {},
    }
  }

componentDidMount = async () => {

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
      thisWeekImages.push( await getImageByDate(day))
      this.setState({ thisWeekImages: thisWeekImages })
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
      <Route
      exact path = '/'
      render={() => {
        return (
          <HomePage
          thisWeekImages={this.state.thisWeekImages}
          />
        )
      }}/>
        <main className="App">
        {this.state.thisWeekImages[0] &&
        <img src={this.state.thisWeekImages[0].hdurl}/>
        }
        {this.state.thisWeekImages[1] &&
        <img src={this.state.thisWeekImages[1].hdurl}/>
        }
        {this.state.thisWeekImages[2] &&
        <img src={this.state.thisWeekImages[2].hdurl}/>
        }
        {this.state.thisWeekImages[3] &&
        <img src={this.state.thisWeekImages[3].hdurl}/>
        }
        {this.state.thisWeekImages[4] &&
        <img src={this.state.thisWeekImages[4].hdurl}/>
        }
        {this.state.thisWeekImages[5] &&
        <img src={this.state.thisWeekImages[5].hdurl}/>
        }
        {this.state.thisWeekImages[6] &&
        <img src={this.state.thisWeekImages[6].hdurl}/>
        }

        </main>
      </Router>
    );
  }
}

export default App;
