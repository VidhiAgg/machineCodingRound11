import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContextProvider';
import './movieDetail.css'
const MovieDetail = () => {
    const {movieId} = useParams();
    const {moviesDb,starredMovies,wishListMovies, dispatch }= useContext(AppContext)
   
   const getDetail = moviesDb.find(({id})=> id === parseInt(movieId));
   const findStarred = (idInput)=> starredMovies?.some(({id})=>
   id === parseInt(idInput))

   const findWishlist = (idInput)=> wishListMovies?.some(({id})=>
   id === parseInt(idInput))

  const {title, year, genre,rating, director, writer, cast, summary, imageURL} = getDetail

    return (
    <div className='container'>
<div className="image-contaier">
    <img src={imageURL} alt={title} />
</div>
<div className="details-container">
    <h1>
        {title}
    </h1>
    <p>{summary}</p>
    <p>Year:{year}</p>
    <p>Genre: {
    genre.map((name, index) => name).join(", ") 
    // (<span>
       
    //    {name}{index === genre.length-1 ? "." : "," }
       

     
    // </span>)  
    }</p>
    <p>Rating: {rating}</p>
    <p>Director: {director}</p>
    <p>Writer: {writer}</p>
    <p>
        Cast: {
            cast.map(actor=> actor).join(", ")
        }
    </p>

    <div className="btns">
                <button className='secondary'
                onClick={(e)=>{
                    e.stopPropagation();
                    findStarred(movieId) ? 
                    dispatch({type:"removeStarred", payload: movieId}) :

                    dispatch({type:"addStarred", payload: movieId})

                }}
                >{findStarred(movieId)? "Remove Starred" : "Add to Starred"}</button>
                <button className='primary'
                onClick={(e)=>{
                    e.stopPropagation();
                    findWishlist(movieId) ? 
                    dispatch({type:"removeWish", payload: movieId}) :

                    dispatch({type:"addWish", payload: movieId})

                }}
                
                >{findWishlist(movieId)? "Remove From Wishlist" : "Add to Wishlist"}</button>
            </div>
</div>
    </div>

  )
}

export default MovieDetail