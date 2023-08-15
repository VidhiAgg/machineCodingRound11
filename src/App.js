
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import NavigationComponent from './components/NavigationComponent';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import AddMovie from './pages/AddMovie/AddMovie';
import WishlistPage from './pages/WishlistPage/WishlistPage';
import MovieDetail from './pages/MovieDetailPage/MovieDetail';

function App() {
  return (

    <div className="App">
      <ToastContainer/>
     <NavigationComponent/>
     <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/addNew" element={<AddMovie/>} />
        <Route path ="/wishList" element={<WishlistPage/>} />
        <Route path ="/movie/:movieId" element={<MovieDetail/>} />
     </Routes> 
    </div>
  );
}

export default App;
