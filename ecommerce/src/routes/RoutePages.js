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
    {path : '/' , element : <Home /> , isPrivate : false},
    {path : '/product:id' , element : <Product /> , isPrivate : false},
    {path : '/card' , element : <Card /> , isPrivate : false},
    {path : '/finalize' , element : <Finalize /> , isPrivate : false},
    {path : '/successful' , element : <Successful /> , isPrivate : false},
    {path : '/unsuccessful' , element : <Unsuccessful /> , isPrivate : false},
    {path : '/login-manager' , element : <Login /> , isPrivate : false},
    {path : '/inventory' , element : <Inventory /> , isPrivate : true},
    {path : '/management-productes' , element : <ManagementProductes /> , isPrivate : true},
    {path : '/orders' , element : <Orders /> , isPrivate : true},
    {path :'*' , element: <NotFound /> , isPrivate : false}
]



export default RoutePages;