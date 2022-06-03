import './styles/App.css';
import RoutePages from 'routes/RoutePages';
import { useEffect, useState } from 'react';
import { getToken, removeUserSession, setUserSession } from 'utils/Common';
import axios from 'axios';
import { DataContext } from 'Context/DataContext';

function App() {

  //get token
  const token = localStorage.getItem("token");

  //get product
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null);
  const [data , setdata] = useState([]);

  //get orders
  const [loadingOrders , setLoadingOrders] = useState(true);
  const [errorOrders , setErrorOrders] = useState(null);
  const [dataOrders , setdataOrders] = useState([]);
  
  //get data
  const getOrders = () => {
      setLoadingOrders(true);
      axios.get(`http://localhost:3002/orders?token=${token}`)
      .then(response => {
        setdataOrders(response.data)
      })
      .catch(err => setErrorOrders("لطفا دوباره تلاش کنید"))
      .finally(res =>setLoadingOrders(false))
  }
  
  //get data
  const getdata = () => {
      setLoading(true);
      axios.get(`http://localhost:3002/products`)
      .then(response => {
          setdata(response.data)
      })
      .catch(err => setError("لطفا دوباره تلاش کنید"))
      .finally(res =>setLoading(false))
  }

  useEffect(()=>{
    const token = getToken();
    if(!token){
      return;
    }
    axios.get(`http://localhost:3002/auth/refresh-token?token=${token}`)
      .then(response => {
        setUserSession(response.data.token , response.data.user);
      }).catch(er => removeUserSession())
    getdata();
    getOrders();
  }, []);


  return (
    <DataContext.Provider value={{ data , getdata , dataOrders , getOrders}}>
      <div className="App">
        <RoutePages />
      </div>
    </DataContext.Provider>
  );
  
}

export default App;
