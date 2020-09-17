import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './ImagePage.scss';

class ImagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      image: '',
      info: '',
      hdurl: '',
      sdurl: '',
      copyright: '',
    }
  }

  componentDidMount() {

  }
  
  render() {
    return(
      <article className='image-page'>

      </article>
    )
  }

  // buttons shouldn't chage based off of state, only image
}
