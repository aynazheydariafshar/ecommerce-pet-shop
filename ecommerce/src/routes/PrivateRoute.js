import { Navigate} from "react-router";
import {getToken} from 'utils/Common';

const PrivateRoute = ({component : Component}) => {
    return getToken() ? <Component /> : <Navigate to='/login'/>
}

export default PrivateRoute;