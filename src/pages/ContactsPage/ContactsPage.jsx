import s from './ContactsPage.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/contacts/selectors';

import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import Loader from '../../components/Loader/Loader';

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="appWrapper">
      <div className="formContainer">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>
      {isLoading && <Loader />}
      {isError && <h2>An error occurred. Try again later...</h2>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
