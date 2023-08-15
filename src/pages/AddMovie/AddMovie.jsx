import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContextProvider'
import { useNavigate } from 'react-router-dom'

const AddMovie = () => {
  const { ratingArray,dispatch,getMaximumId, yearsArray } = useContext(AppContext)
 
const [movie, setMovie]= useState({
  id:NaN,
  title:"",
  year:yearsArray,
  rating:  ratingArray,
  genre:"",
  director:"",
  writer:"",
  cast:"",
  summary:"",
  imageURL: ""
})

const handleChange =(event)=> setMovie({...movie, [event.target.name] : [event.target.value]} )
console.log(movie.genres);
const submitHandler = (e)=>{
  e.preventDefault();
  const payload = {...movie, genre :
    movie.genre.split(","),
  cast: movie.cast.split(",")}
  dispatch({type: "Add_movie", payload:{
   
payload}})
}


return <div className="classmodal">
  <h2>Add Movie</h2>
  <form onSubmit={submitHandler}>
  <label htmlFor="idInp"> ID: 
    <input type="number" name="id" id="iInp"    disabled
    value={getMaximumId}/>
  </label>
  <label htmlFor="title"> Title: 
    <input type="text" name="title" id="title" required onChange={handleChange}
     />
  </label>
  <label htmlFor="genre"> Genre: 
  <input type="text" name="genre" id="genre"  required onChange={handleChange}
    />


  </label>
  <label htmlFor="cast"> Cast:
    <input type="text" name="cast" id="cast" required onChange={handleChange}/>
  </label>
<div>
  <div className="year">
    {
      <select required name="year" onChange={handleChange} >
        <option value="">Select Release Year</option>
        {
                yearsArray?.map((year) =>
                    <option key={year} value={(year)}>{year}</option>)
                }
            </select>
      
    }
  </div>
  <div className="rating">
  {
      <select required name="rating" onChange={handleChange} >
        <option value="">Select Rating</option>
        {
                ratingArray?.map((rating) =>
                    <option key={rating} value={(rating)}>
                      {rating}</option>)
                }
            </select>
      
    }
  </div>
</div>
  <label htmlFor="summary" >
    <textarea name="summary" id="summary" required onChange={handleChange}
    cols="30" rows="10"></textarea>
  </label>

  <label htmlFor="director"> Director: 
    <input type="text" name="director" id="director" required onChange={handleChange}
     />
  </label>
  <label htmlFor="writer"> Writer: 
    <input type="text" name="writer" id="writer" required onChange={handleChange}
     />
  </label>
  <label htmlFor="imageUrl"> Image Url: 
    <input type="link" name="imageURL" id="imageUrl" required onChange={handleChange}
     />
  </label>
  <br />
  <button>
    Add Movie
  </button>
  </form>
</div>


}

export default AddMovie