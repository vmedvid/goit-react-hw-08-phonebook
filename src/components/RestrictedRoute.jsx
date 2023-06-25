import useAuthorisation from 'hooks/useAuthorisation';
import { Navigate } from 'react-router-dom';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn } = useAuthorisation();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
