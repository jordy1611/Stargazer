import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
// import component from '../folder/file';
import './App.scss';
import { getImageToday, getImageByDate, getDemoImage} from '../APICalls'
import { getPreviousWeek }from '../helpers.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todaysDate: '',
      prevWeekDates: [],
      todayImage: {},
      prevWeekImages: [],

    }
  }


componentDidMount() {
  const prevWeek = getPreviousWeek()
  this.setState({todaysDate: prevWeek[0], prevWeekDates: prevWeek})

  // console.log('today date', this.state.todaysDate)
  // const todayImage = getImageByDate(this.state.todaysDate)

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
