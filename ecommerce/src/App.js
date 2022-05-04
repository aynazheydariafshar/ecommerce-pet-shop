import './Assets/Styles/css/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from 'Pages/Customer/Home';
import Product from 'Pages/Customer/Product';
import Card from 'Pages/Customer/Card';
import Finalize from 'Pages/Customer/Finalize ';
import Successful from 'Pages/Customer/Successful';
import Unsuccessful from 'Pages/Customer/Unsuccessful';
import Login from 'Pages/Managment/Login';
import Inventory from 'Pages/Managment/Inventory';
import ManagementProductes from 'Pages/Managment/ManagementProductes';
import Orders from 'Pages/Managment/Orders';
import NotFound from 'Pages/NotFound';

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
        <Route path='/LoginManager' element={<Login />}/>
        <Route path='/Inventory' element={<Inventory />}/>
        <Route path='/ManagementProductes' element={<ManagementProductes />}/>
        <Route path='/Orders' element={<Orders />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
