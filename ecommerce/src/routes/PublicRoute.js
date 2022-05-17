import { Navigate, Route } from "react-router";
import {getToken} from 'utils/Common';
import { Navigate , Route } from "react-router";

const PublicRoute = ({component : Component , ...rest}) => {
    return (
        <Route
            {...rest}
            render = {props => {
                !getToken() ? <Component {...props} />
                : <Navigate to='/'/>
            }} 
        />
    )
}

export default PublicRoute;