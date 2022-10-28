import './App.css';
import { getWinners} from './API/axios';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WinnersPage from './WinnersPage';
import { Typography } from '@material-ui/core';
function App() {

  const [winners,setWinners] = useState([]);
  const [searchResults,setSearchResults] = useState([]);   

  useEffect(() => {
    getWinners().then(json => {
      setWinners(json)
      setSearchResults(json)
    })
  }, [])

  return (
    <>
      <Typography 
        variant = "h4"
        style = {{ margin:18, fontFamily: "Roboto", textAlign: "center" }}
        >
        Nobel Prize Winners
      </Typography>
      <SearchBar winners={winners} setSearchResults={setSearchResults} />
      <WinnersPage searchResults={searchResults} />
    </>
  );
}

export default App;
