import s from './ContactsPage.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/contacts/selectors';

import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import {
  selectDeleteModalIsOpen,
  selectOpenModal,
} from '../../redux/modal/selectors';
import ModalConfirmDelete from '../../components/ModalConfirmDelete/ModalConfirmDelete';

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const modalIsOpen = useSelector(selectOpenModal);
  const deleteModalIsOpen = useSelector(selectDeleteModalIsOpen);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.bar}>
          <h1 className="title">Phonebook</h1>
          <ContactForm />
          <SearchBox />
        </div>
      </div>
      {isLoading && <Loader />}
      {modalIsOpen && <Modal />}
      {deleteModalIsOpen && <ModalConfirmDelete />}
      {isError && <h2>An error occurred. Try again later...</h2>}
      <div className={s.container}>
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
