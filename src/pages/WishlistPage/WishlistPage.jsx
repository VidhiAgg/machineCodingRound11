import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContextProvider'
import { useNavigate } from 'react-router-dom'
import "../HomePage/home.css"
const WishlistPage = () => {
 


  const {wishListMovies , dispatch} = useContext(AppContext)
  const navigate = useNavigate();
  return (
    <div className='mainContainer'>
<div className="header">
  <h1>Wishlist Movies</h1>
</div>
 <div className="movie-car">
 {
    wishListMovies?.length > 0 ? wishListMovies?.map((movie)=> (
        <div key = {movie.id}className="container-movie" 
        onClick={(event)=>{
            event.stopPropagation();
            navigate(`/movie/${movie.id}`)
        }}>
            <div className="image">
                <img src={movie.imageURL} alt="" />

            </div>
            <div className="name">
                <h3>{movie.title}</h3>
            </div>
            <div className="summary">
               <p> {movie.summary}</p>
            </div>
            <div className="btns">
                <button className='primary'
                onClick={(e)=>{
                    e.stopPropagation();
                   
                    dispatch({type:"removeWish", payload: movie.id}) 

                    

                }}
                
                >{"Remove From Wishlist" }</button>
            </div>
        </div>
    )) :
    <h2>
        No Movies Added 😏
    </h2>
}
  </div>
    </div>
  )
}

export default WishlistPage