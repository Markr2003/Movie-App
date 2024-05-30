import React from 'react'
import "./Moviecard.css"
function Moviecard({movies}) {

    const { name, imdb_rating, genre, duration, img_link} = movies;
  return (
    <div className='container'>
        <div className='img-container' key={movies.id}>
            <img  className="card-img" src={img_link} alt='movie-card'></img>
        </div>
        <div className='details'>
        <div className='title'>
           {name}
        </div>
        <div className='genre'>
            {genre}
        </div>
        <div className='rating'>
            <span>Rating:{imdb_rating}</span>
            <span>Duration:{duration}</span>
        </div>
        </div>

    </div>
  )
}

export default Moviecard