import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './App.scss';
import { getImageByDate } from '../APICalls'
import { getPreviousWeek }from '../helpers.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      landing: true,
      todaysDate: 'no today',
      prevWeekDates: ['no week'],
      todayImage: {},
      prevImage1: {},
      prevWeekImages: {},
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
    await this.setState({ todayImage: todayImage})
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
      <main className="App">
      <h1>APP</h1>
      </main>
    );
  }
}

export default App;
