import './App.css';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  return (
    <div className="appWrapper">
      <div className="formContainer">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>An error occurred. Try again later...</h2>}
      <ContactList />
    </div>
  );
}

export default App;
