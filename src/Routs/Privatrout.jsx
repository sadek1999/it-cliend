import  {  useContext } from 'react';
import { authContext } from '../share/Auth/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Privatrout = ({children}) => {
    const {user,loding}=useContext(authContext)
    
    const location=useLocation()
    console.log(location.pathname)
    // console.log('come in private')
    if(loding){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to={'/singin'} ></Navigate>
};

export default Privatrout;