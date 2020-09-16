import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
// import component from '../folder/file';
import './App.scss';
import { getImageToday, getImageByDate, getDemoImage} from '../APICalls'


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
async componentDidMount() {
  const todaysInfo = await getImageToday()
  console.log('today', todaysInfo)
  const daysInfo = await getImageByDate('2020-01-28')
  console.log('1-28', daysInfo)
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
