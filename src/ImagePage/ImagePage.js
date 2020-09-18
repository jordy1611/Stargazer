import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './ImagePage.scss';

class ImagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      title: '',
      info: '',
      hdurl: '',
      sdurl: '',
      copyright: '',
    }
  }

  componentDidMount() {
    this.setState({
      date: this.props.image.date,
      title: this.props.image.title,
      info: this.props.image.explanation,
      sdurl: this.props.image.sdurl,
      hdurl: this.props.image.hdurl,
      copyright: this.props.image.copyright || '',
    })
  }

  render() {
    return(
      <article className='image-page'>
        <h1>ImagePage</h1>
        <img  className='large-image' src={this.state.hdurl}/>
      </article>
    )
  }

  // buttons shouldn't chage based off of state, only image
}
export default ImagePage
