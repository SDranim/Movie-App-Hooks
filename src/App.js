import { useState } from 'react';
import './App.css';
import Addmovie from './Components/Addmovie';
import Movieslist from './Components/Movieslist'
import { Data } from './Data';
import Search from './Components/Search';

function App() {
const addmovie=(newM)=>setMovies([...movies,newM])
const [movies, setMovies] = useState(Data)
const [search,setSearch]=useState ("")


  return (
    <div className="App">
    <Search search={search} setSearch={setSearch}/> 
      <Addmovie addmovie={addmovie}/>
<Movieslist movies={movies} search={search}/>
    </div>
  );
}

export default App;
