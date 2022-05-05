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

const RoutePages = [
    {path : '/' , element : <Home />},
    {path : '/product:id' , element : <Product />},
    {path : '/card' , element : <Card />},
    {path : '/finalize' , element : <Finalize />},
    {path : '/successful' , element : <Successful />},
    {path : '/unsuccessful' , element : <Unsuccessful />},
    {path : '/login-manager' , element : <Login />},
    {path : '/inventory' , element : <Inventory />},
    {path : '/management-productes' , element : <ManagementProductes />},
    {path : '/orders' , element : <Orders />},
    {path :'*' , element: <NotFound />}
]



export default RoutePages;