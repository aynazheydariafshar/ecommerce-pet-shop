import Card from "pages/Card";
import Finalize from "pages/Finalize ";
import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import Product from "pages/Product";
import Successful from "pages/Successful";
import Unsuccessful from "pages/Unsuccessful";

export const RoutePages = [
    {path : '/' , element : <Home /> , isPrivate : false},
    {path : '/product:id' , element : <Product /> , isPrivate : false},
    {path : '/card' , element : <Card /> , isPrivate : false},
    {path : '/finalize' , element : <Finalize /> , isPrivate : false},
    {path : '/successful' , element : <Successful /> , isPrivate : false},
    {path : '/unsuccessful' , element : <Unsuccessful /> , isPrivate : false},
    {path : '/login' , element : <Login /> , isPrivate : false},
    {path :'*' , element: <NotFound /> , isPrivate : false}
]