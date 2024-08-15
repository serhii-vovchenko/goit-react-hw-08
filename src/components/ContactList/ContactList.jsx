import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const showFilteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.wrapper}>
      {showFilteredContacts.map(item => {
        return <Contact key={item.id} data={item} />;
      })}
    </ul>
  );
};

export default ContactList;
