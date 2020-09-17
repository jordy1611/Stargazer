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

createDateData() {
  const date = new Date()
  const today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
  const prevWeek = getPreviousWeek(new Date())
  this.setState({ todaysDate: today, prevWeekDates: prevWeek })
  // const day1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() - 1
  // const date = new Date()
  // const today = new Date(date.getFullYear(), date.getMonth(), date.getDate() - )
  // const day1 =

  console.log(prevWeek)

}

async componentDidMount() {
  this.createDateData()
  const today = new Date()
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  this.setState({ todaysDate: date })
  // might not need ^
  // console.log(this.state.todaysDate)
  const todaysInfo = await getImageByDate('2020-09-16')
  // console.log('today', todaysInfo)
  const daysInfo = await getImageByDate('2020-01-28')
  // console.log('1-28', daysInfo)
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
