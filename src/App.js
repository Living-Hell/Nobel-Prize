import './App.css';
import { getWinners} from './API/axios';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WinnersPage
 from './WinnersPage';
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
      <SearchBar winners={winners} setSearchResults={setSearchResults} />
      <WinnersPage searchResults={searchResults} />
    </>
  );
}

export default App;
