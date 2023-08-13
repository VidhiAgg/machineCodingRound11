import React from 'react'
import { useParams } from 'react-router-dom'
const MovieDetail = () => {
    const {movieId, moviesState} = useParams();
    const getDetail = moviesState?.moviesData.find(({id})=> id === parseInt(movieId))
  const {title,  } = getDetail
    return (
    <div>
<h2>{title}</h2>
    </div>
  )
}

export default MovieDetail