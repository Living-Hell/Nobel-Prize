import './App.css';
import NobelPrize from './components/NobelPrize';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [winnerList, setWinnerList] = useState([]);
  useEffect(() => {
    async function fetchWinnerList(){
      try {
        const requestUrl = 'http://api.nobelprize.org/v1/prize.json';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON.prizes[0].year);
        setWinnerList(responseJSON);
      } catch {
        
      }
    }
  
    return () => {
      fetchWinnerList();
    }
  }, [])
  

  return (
    <div className='App'>
      <NobelPrize winnersList={winnerList} />
    </div>
  );
}

export default App;
