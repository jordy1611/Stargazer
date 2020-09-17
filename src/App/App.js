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
      prevWeekImages: [],
      searchDate: '',
      searchImage: {},
    }
  }



componentDidMount = async () => {
  const prevWeek = getPreviousWeek()
  this.setState({todaysDate: prevWeek[0], prevWeekDates: prevWeek})
  // todaysDate may be completely unecessary
  try {
    const todayImage = await getImageByDate(prevWeek[0])
    this.setState({ todayImage: todayImage})
  } catch(error) {
    console.error(error)
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
