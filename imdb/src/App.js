
import './App.css';
import{ useEffect, useState } from 'react'
import axios from 'axios'
import Moviecard from './components/Moviecard/Moviecard';
function App() {

  const [movies,setMovies] = useState([])

const getmovies = async() =>{
  try{
    const { data } = await axios.get("https://movies-app.prakashsakari.repl.co/api/movies");
    setMovies(data);
  }catch(err){
    console.log(err);
  }

}

useEffect(()=>{
 getmovies();
},[])



  return (
    <div className="App">
  <h1>Movies</h1>
  <main className='main'>
  {
    movies && movies.length > 0 && movies.map(movies => <Moviecard key={movies.id} movies={movies}/>)
  }
  </main>

    </div>
  );
}

export default App;
