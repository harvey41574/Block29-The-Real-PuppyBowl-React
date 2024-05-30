import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import './App.css';
//import NewPlayerForm from './components/NewPlayerForm';
import SearchBar from './components/SearchBar';
 function App() {


  return (
    <>
    <h1 className='AllPlayers'>All Players</h1>
      
      <Router>
        <Routes>
         <Route 
           path='/'
            element={<AllPlayers />}
            />
           <Route path='/single-player/:playerId'
            element= {<SinglePlayer />}
         />
         <Route path='/search'
          element= {<SearchBar />}
          />
       </Routes>
      </Router>
   </>
  )
}

export default App
