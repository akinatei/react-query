
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './App.css';


function App() {

  // const { data, error, isLoading } = useQuery({key: ['test'], fn:() => {
  //   return axios('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  //   }
  // })

  // const priceQuery = useQuery({
  //   queryKey: ['price'],
  //   queryFn: () =>{
  //     return axios('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  //     //return response
  //   },
  //   //refetchInterval: 5000
  // });

  const customerQuery = useQuery({
    queryKey: ['customers'], 
    queryFn: () => {
    return axios('http://localhost:3000/api/customers')
    },
    //refetchInterval: 10000
    //refetchOnWindowFocus: true,
    refetchOnWindowFocus: false,
    //staleTime: 1000 * 1,
    refetchInterval: 1000,
    refetchIntervalInBackground: false,
  })

  if(customerQuery?.data?.data?.customers){
    return <div className="App">
      {customerQuery.data.data.customers.map((customer) =>{
        return <p key={customer._id}>{customer.name}</p>
      })}
    </div>
  }

  // return (
  //   <div className="App">
  //     {/* {priceQuery?.error ? <p>Error on display</p> : null}
  //     {priceQuery?.isLoading ? <p>Loading....</p> : null}
  //     {priceQuery?.data?.data?.bitcoin?.usd ? priceQuery.data.data.bitcoin.usd : null} */}
  //   </div>
  // );
}

export default App;
