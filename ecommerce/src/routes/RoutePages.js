import Orders from "pages/Orders";
import ManagementProductes from "pages/ManagementProductes";
import Inventory from "pages/Inventory";
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