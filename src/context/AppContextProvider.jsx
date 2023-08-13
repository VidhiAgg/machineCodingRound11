import React, { createContext, useEffect, useReducer} from 'react'
import { movies } from '../data/data';
import { reducer } from '../reducer/appReducer';


export const AppContext = createContext();
const AppContextProvider= ({children}) => {
 //const [moviesData, setMovieData] =  useState()


 const localStorgaeData = JSON.parse
 (localStorage.getItem("state"));
 const intialState= {
  moviesData: localStorgaeData.moviesData || movies,
  genreSelected:"",
  yearSelected:"",
  ratingSelecte:"",
  searchInput:"",
  starredMovies:localStorgaeData.starredMovies ||[],
  wishListMovies:localStorgaeData.wishListMovies ||[]
 }


 const [moviesState, dispatch] = useReducer(reducer, intialState)

 useEffect(()=>{
localStorage.setItem("state", JSON.stringify(moviesState))
 },[moviesState])

 const getUniqueGenreName = 
 moviesState.moviesData?.
 reduce((genreList, {genre})=>
  {

  genre.forEach((genrName)=> {
    if(!genreList.includes(genrName))  {
      genreList.push(genrName)
     }
  }
  
 ) 
 
 return genreList;
},[]);

//  console.log(getUniqueGenreName);

// const getUniqueGenreName = [...new Set(
//   moviesState.moviesData?.flatMap(movie => movie.genre)
// )];

//console.log(getUniqueGenreName);

const yearsArray = Array.from({ length: 2023 - 1990 + 1 }, (_, index) => (1990 + index).toString());

//console.log(yearsArray);

const ratingArray = ['1','2','3','4','5','6','7','8','9','10'];

const searchedFilter = ()=>{
  if(moviesState.searchInput?.length>0){
    moviesState.searchInput.toLowerCase()
return moviesState.moviesData?.filter((movie)=> movie.title.toLowerCase().
includes(moviesState.searchInput.toLowerCase())
  ||
movie.director.toLowerCase().includes(moviesState.searchInput.toLowerCase())
||
  movie.cast.some((name) => name.includes(moviesState.searchInput.toLowerCase())))


  }else{
    return moviesState.moviesData
  }
} 
console.log(searchedFilter())

const filterByYear = moviesState?.yearSelected.length > 0 ? 
[...searchedFilter()]?.filter(({year})=> year === parseInt(moviesState?.yearSelected))
 : [...searchedFilter()]

 const filterByRating = moviesState?.ratingSelecte.length > 0 ? 
 filterByYear?.filter(({rating})=> rating === parseInt(moviesState.ratingSelecte)) : filterByYear

 const filterList = moviesState?.genreSelected.length > 0 ?
 filterByRating.filter(movie => movie.genre.find(genre => 
  genre.toLowerCase().includes(moviesState.genreSelected.toLowerCase()))) : filterByRating

//console.log(filterList);

  return (

   <AppContext.Provider value={{filterList,getUniqueGenreName, 
   moviesState,yearsArray,ratingArray, dispatch,
    starredMovies: moviesState.starredMovies, wishListMovies : moviesState.wishListMovies}}>
{children}
   </AppContext.Provider>
  )
}

export default AppContextProvider
