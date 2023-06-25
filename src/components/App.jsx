// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contacts/operations';
// import { Toaster } from 'react-hot-toast';

// export const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const isLoading = useSelector(state => state.contacts.isLoading);
//   const error = useSelector(state => state.contacts.error);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       {isLoading && !error && 'Please wait, contacts are loading...'}
//       {error && `Error: ${error}`}
//       <ContactList />
//       <Toaster position="top-right" reverseOrder={false} />
//     </div>
//   );
// };

import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import RestrictedRoute from 'components/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute';
import Layout from './Layout/Layout';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import useAuthorisation from 'hooks/useAuthorisation';

const Home = lazy(() => import('pages/Home'));
const RegisterForm = lazy(() => import('pages/RegisterForm'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const { isRefreshing } = useAuthorisation();

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegisterForm />}
                  redirectTo="/contacts"
                />
              }
            />

            <Route
              path="/login"
              element={
                <RestrictedRoute component={<Login />} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={<Contacts />} redirectTo="/login" />
              }
            />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </>
    )
  );
}

export default App;
