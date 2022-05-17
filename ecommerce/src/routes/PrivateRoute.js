import { Navigate, Outlet} from "react-router";
import {getToken} from 'utils/Common';

const PrivateRoute = (props) => {
    return getToken() ? <Outlet /> : <Navigate to='/login'/>
}

export default PrivateRoute;