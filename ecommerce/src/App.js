import './styles/App.css';
import RoutePages from 'routes/RoutePages';
import { useEffect, useState } from 'react';
import { getToken, removeUserSession, setUserSession } from 'utils/Common';
import axios from 'axios';

function App() {
  useEffect(()=>{
    const token = getToken();
    if(!token){
      return;
    }
    axios.get(`http://localhost:3002/auth/refresh-token?token=${token}`)
      .then(response => {
        setUserSession(response.data.token , response.data.user);
      }).catch(er => removeUserSession())
  }, [])
  return (
    <div className="App">
      <RoutePages />
    </div>
  );
  
}

export default App;
