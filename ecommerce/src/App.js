import './assets/styles/css/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Product from 'pages/Product';
import Card from 'pages/Card';
import Finalize from 'pages/Finalize ';
import Successful from 'pages/Successful';
import Unsuccessful from 'pages/Unsuccessful';
import Login from 'pages/Login';
import Inventory from 'pages/Inventory';
import ManagementProductes from 'pages/ManagementProductes';
import Orders from 'pages/Orders';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/HomePage' element={<Home />}>
          <Route path=':productId' element={<Product />}/>
        </Route>
        <Route path='/Card' element={<Card />}/>
        <Route path='/Finalize' element={<Finalize />}/>
        <Route path='/Successful' element={<Successful />}/>
        <Route path='/UnSuccessful' element={<Unsuccessful />}/>
        <Route path='/Login-Manager' element={<Login />}/>
        <Route path='/Inventory' element={<Inventory />}/>
        <Route path='/Management-Productes' element={<ManagementProductes />}/>
        <Route path='/Orders' element={<Orders />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
