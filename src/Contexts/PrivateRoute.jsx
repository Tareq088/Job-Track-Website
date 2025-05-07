import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();
    console.log(location)

    if(loading){
        return <Loading></Loading>
    }
                 
                // if-> user thake return children mane jekhane jete chai sekhane, ar na thakle navigaate to login
            // user thakle jobs news er details show korbe tai return children diche,, ar na thakle navigaate to login
    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname}  to='/auth/login'></Navigate>;
};

export default PrivateRoute;