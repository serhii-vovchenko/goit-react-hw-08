import s from './ContactsPage.module.css';

import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/contacts/selectors';

import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';

const ContactsPage = () => {
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
};

export default ContactsPage;
