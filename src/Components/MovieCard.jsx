import React from 'react'

const MovieCard = ({movie}) => {
  const {title, rating, poster_path} = movie
  return (
    <div className="movieCard">
    <img src={poster_path} alt="" className="moviePoster" />
    <div className="movieCardFooter">
      <div className="movieCardDetails">  
        <h2 className="movieCardTitle">{title}</h2>
        <p className="movieCardRating">{rating}</p>
      </div>
      <div className="favButton">#</div>
    </div>
  </div>
  )
}

export default MovieCard
