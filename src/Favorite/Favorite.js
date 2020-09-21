import React from 'react'
import './Favorite.scss'

const Favorite = (props) => {

  return(
    <article className='favorite'>
      <div className='favorite-top'>
        <p className='favorite-title'>{props.favorite.title}</p>
        <img src={props.favorite.hdurl} className='favorite-image' alt={`${props.favorite.title} image`}/>
      </div>
      <div className='favorite-bottom'>
        <p className='favorite-explanation'>{props.favorite.explanation}</p>
        <p className='favorite-sdurl'>{props.favorite.sdurl}</p>
        <p className='favorite-hdurl'>{props.favorite.hdurl}</p>
        { props.favorite.copyright &&
          <p className='favorite-copyright'>{props.favorite.copyright}</p>
        }
      </div>
    </article>
  )
}

export default Favorite
