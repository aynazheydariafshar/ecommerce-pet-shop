import Card from "pages/Card";
import Finalize from "pages/Finalize ";
import Home from "pages/Home";
import Inventory from "pages/Inventory";
import Login from "pages/Login";
import ManagementProductes from "pages/ManagementProductes";
import NotFound from "pages/NotFound";
import Orders from "pages/Orders";
import Product from "pages/Product";
import Successful from "pages/Successful";
import Unsuccessful from "pages/Unsuccessful";
import { Routes , Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const RoutePages = () => {
    return <Routes>
        <Route path='/' element={<Home />}>
            <Route path=':id' element={<Product /> }/>
        </Route>
        <Route path='/card' element={<Card />} />
        <Route path='/finalize' element={<Finalize />} />
        <Route path='/successful' element={<Successful />} />
        <Route path='/Unsuccessful' element={<Unsuccessful />} />
        <Route path='/login' element={<Login />} />

        <Route element={<PrivateRoute />}>
            <Route path='/inventory' element={<Inventory />}/>
            <Route path='/management-productes' element={<ManagementProductes />}/>
            <Route path='/orders' element={<Orders />}/>
        </Route>

        <Route path='*' element={<NotFound />}/>

    </Routes>
}

export default RoutePages;