import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './App.scss';
import Landing from '../Landing/Landing'
import HomePage from '../HomePage/HomePage'
import { getImageByDate } from '../APICalls'
import { getPreviousWeek }from '../helpers.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      todaysDate: 'no today',
      prevWeekDates: ['no week'],
      todayImage: {},
      prevImage1: {},
      prevWeekImages: {},
      imagesLoaded: 0,
      searchDate: '',
      searchImage: {},
    }
  }

componentDidMount = async () => {

  const prevWeek = getPreviousWeek()
  const today = prevWeek.shift()
  this.setState({ todaysDate: today, prevWeekDates: prevWeek })
  try {
    const todayImage = await getImageByDate(today)
    await this.setState({ todayImage: todayImage, })
  } catch(error) {
    console.error(error)
  }
  for (let day of prevWeek) {
    try {
      const prevWeekImages = this.state.prevWeekImages
      prevWeekImages[day] = await getImageByDate(day)
      await this.setState({ prevWeekImages: prevWeekImages })
    } catch(error) {
      console.error(error)
    }
  }

}
  render() {
    return (
      <Router>
      <Route
      exact path = '/'
      render={() => {
        return (
          <HomePage />
        )
      }}/>
        <main className="App">
        {this.state.todayImage &&
        <img src={this.state.todayImage.hdurl}/>
        }
        {this.state.prevWeekImages[this.state.prevWeekDates[0]] &&
        <img src={this.state.prevWeekImages[this.state.prevWeekDates[0]].hdurl}/>
        }
        {this.state.prevWeekImages[this.state.prevWeekDates[1]] &&
        <img src={this.state.prevWeekImages[this.state.prevWeekDates[1]].hdurl}/>
        }
        {this.state.prevWeekImages[this.state.prevWeekDates[2]] &&
        <img src={this.state.prevWeekImages[this.state.prevWeekDates[2]].hdurl}/>
        }
        {this.state.prevWeekImages[this.state.prevWeekDates[3]] &&
        <img src={this.state.prevWeekImages[this.state.prevWeekDates[3]].hdurl}/>
        }
        {this.state.prevWeekImages[this.state.prevWeekDates[4]] &&
        <img src={this.state.prevWeekImages[this.state.prevWeekDates[4]].hdurl}/>
        }
        {this.state.prevWeekImages[this.state.prevWeekDates[5]] &&
        <img src={this.state.prevWeekImages[this.state.prevWeekDates[5]].hdurl}/>
        }
        </main>
      </Router>
    );
  }
}

export default App;
