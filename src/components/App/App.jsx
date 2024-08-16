import './App.css';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginPage from '../../pages/LoginPage/LoginPage';
import Layout from '../Layout/Layout';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const isLoading = useSelector(selectLoading);
  // const isError = useSelector(selectError);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<h2>Page not found</h2>} />

        {/* <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={LoginPage} /> */}
      </Routes>
      {/* <div className="appWrapper">
        <div className="formContainer">
          <h1 className="title">Phonebook</h1>
          <ContactForm />
          <SearchBox />
        </div>
        {isLoading && <h2>Loading...</h2>}
        {isError && <h2>An error occurred. Try again later...</h2>}
        <ContactList />
      </div> */}
    </>
  );
}

export default App;
