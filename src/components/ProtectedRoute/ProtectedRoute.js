import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, loggedIn, ...rest }) => {
    return (
        <Route {...rest}>
            {loggedIn ? children : <Navigate replace to="/" />}
        </Route>
    );
};

export default ProtectedRoute;