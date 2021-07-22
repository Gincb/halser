import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router';
import { AuthContext } from './Auth';

type ProtectedRouteProps = {
  component: React.FunctionComponent<any>;
} & RouteProps;

function PrivateRoute(props: ProtectedRouteProps) {
  const { component: RouteComponent, ...rest } = props;
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
    >
      {routeProps =>
        currentUser ? (
          <>
            <RouteComponent {...routeProps} />
          </>
        ) : (
          <Redirect to={'/'} />
        )
      }
    </Route>
  );
}

export default PrivateRoute;