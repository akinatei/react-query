
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './App.css';

function App() {
  // const { data, error, isLoading } = useQuery({key: ['test'], fn:() => {
  //   return axios('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  //   }
  // })

  const { data, error, isLoading } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>{
      return axios('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
      //return response
    }
  })
  return (
    <div className="App">
      {error ? <p>Error on display</p> : null}
      {isLoading ? <p>Loading....</p> : null}
      {data?.data?.bitcoin?.usd ? data.data.bitcoin.usd : null}
    </div>
  );
}

export default App;
