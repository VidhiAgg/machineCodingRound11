import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContextProvider'
import "./home.css"
import { useNavigate } from 'react-router-dom'
import AddMovie from '../AddMovie/AddMovie'

const HomePage = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const navigate = useNavigate();
    const {getUniqueGenreName, ratingArray, starredMovies,wishListMovies , dispatch, yearsArray, filterList} = useContext(AppContext)
  
    const findStarred = (idInput)=> starredMovies?.some(({id})=>
     id === parseInt(idInput))
  
     const findWishlist = (idInput)=> wishListMovies?.some(({id})=>
     id === parseInt(idInput))

    return (
    <div className='mainContainer'>
        <div className="filter-section">
<h1>
    Movies
</h1>

<label htmlFor="genre-selector">
            <select 
            id = "genre-selector" onChange= {(event)=> dispatch({type:"genreSelection", 
            payload: event.target.value})}>
                <option value="">All Genre</option>
                {
                getUniqueGenreName?.map((dept, index) =>
                    <option key={index} value={(dept)}>{dept}</option>)
                }
            </select>
            </label>



            <label htmlFor="year-selector">
            <select 
            id = "year-selector" onChange= {(event)=> dispatch({type:"yearSelection", 
            payload: event.target.value})}>
                <option value="">Release Year</option>
                {
                yearsArray?.map((year) =>
                    <option key={year} value={(year)}>{year}</option>)
                }
            </select>
            </label>

            <label htmlFor="rating-selector">
            <select 
            id = "rating-selector" onChange= {(event)=> dispatch({type:"ratingSelection", 
            payload: event.target.value})}>
                <option value="">Rating</option>
                {
                ratingArray?.map((rating, index) =>
                    <option key={index} value={(rating)}>{rating}</option>)
                }
            </select>
            </label>

<div className="button">
    <button onClick={()=>setShowAddModal(true)}>Add a movie</button>
</div>
        </div>
        <div className="movie-car">
{
    filterList?.length > 0 ? filterList?.map((movie)=> (
        <div key = {movie.id}className="container-movie" 
        onClick={(event)=>{
            event.stopPropagation();
            navigate(`/movie/${movie.id}`)
        }}>
            <div className="image">
                <img src={movie.imageURL} alt="" />

            </div>
           
                <h3>{movie.title}</h3>
            
          
               <p> {movie.summary}</p>
            
            <div className="btns">
                <button className='secondary'
                onClick={(e)=>{
                    e.stopPropagation();
                    findStarred(movie.id) ? 
                    dispatch({type:"removeStarred", payload: movie.id}) :

                    dispatch({type:"addStarred", payload: movie.id})

                }}
                >{findStarred(movie.id)? "Remove Starred" : "Add to Starred"}</button>
                <button className='primary'
                onClick={(e)=>{
                    e.stopPropagation();
                    findWishlist(movie.id) ? 
                    dispatch({type:"removeWish", payload: movie.id}) :

                    dispatch({type:"addWish", payload: movie.id})

                }}
                
                >{findWishlist(movie.id)? "Remove From Wishlist" : "Add to Wishlist"}</button>
            </div>
        </div>
    )) :
    <h2>
        No record found
    </h2>
}
        </div>

{
    showAddModal && <AddMovie />
}

    </div>
  )
}

export default HomePage