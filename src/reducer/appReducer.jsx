import { toast } from "react-toastify";

export const reducer = (state, action)=>{
    switch(action.type){

case "genreSelection" :return{...state, genreSelected: action.payload}
case "yearSelection":
    return{...state, yearSelected: action.payload}
case "ratingSelection" :return{...state, ratingSelecte: action.payload
}
case " Add_movie" : {
    console.log(action.payload);
    toast.success("Added")
return {...state, moviesData:[...state.moviesData, action.payload]}
}

case "addStarred" :
    {
        const addStared = state.moviesData.find(({id})=> id === parseInt(action.payload) )
        return{...state, starredMovies:[...state.starredMovies,addStared ]}
    }
   
    case "removeStarred" :
    {
        const starredlist = state.starredMovies?.filter(({id})=> id !== parseInt(action.payload) )
        return{...state, starredMovies:[...starredlist ]}
    }
   

    case "addWish" :
    {
        const addWishlist = state.moviesData.find(({id})=> id === parseInt(action.payload) )
        return{...state, wishListMovies:[...state.wishListMovies,addWishlist ]}
    }
   
    case "removeWish" :
    {
        const wishlist = state.wishListMovies?.filter(({id})=> id !== parseInt(action.payload) )
        return{...state, wishListMovies:[...wishlist ]}
    }
   
    case "search" : return{...state, searchInput: action.payload
    }
        default: return state
    }

    
}