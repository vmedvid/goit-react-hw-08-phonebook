import useAuthorisation from 'hooks/useAuthorisation';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn, isRefreshing } = useAuthorisation();
  return isLoggedIn || isRefreshing ? Component : <Navigate to={redirectTo} />;
}
