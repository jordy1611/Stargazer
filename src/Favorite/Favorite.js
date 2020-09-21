import React from 'react'
import './Favorite.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Favorite = (props) => {

  return(
    <article className='favorite'>
      <div className='favorite-visible'>
        <p className='favorite-title'>{props.favorite.title}</p>
        <p className='favorite-date'>{props.favorite.date}</p>
        <img src={props.favorite.hdurl} className='favorite-image' alt={`${props.favorite.title} image`}/>
      </div>
      <div className='favorite-hidden'>
        <p className='favorite-explanation'>{props.favorite.explanation}</p>
        <p className='favorite-sdurl'>sdurl: {props.favorite.url}</p>
        <p className='favorite-hdurl'>hdurl: {props.favorite.hdurl}</p>
        { props.favorite.copyright &&
          <p className='favorite-copyright'>copyright: {props.favorite.copyright}</p>
        }
      </div>
    </article>
  )
}

Favorite.propTypes = {
  favorite: PropTypes.object,
}

export default Favorite
