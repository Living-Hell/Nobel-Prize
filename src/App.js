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
        id="Top"
        variant = "h4"
        style = {{ margin:18, fontFamily: "Roboto", textAlign: "center" }}
      >
        Nobel Prize Winners
      </Typography>
      <SearchBar winners={winners} setSearchResults={setSearchResults} />
      <WinnersPage searchResults={searchResults} />
      <a href="#Top" style={{textAlign:"center"}}><h4>Back to top</h4></a>
    </>
  );
}

export default App;
