import { useDispatch, useSelector } from 'react-redux';
import s from './ModalConfirmDelete.module.css';
import { closeDeleteModal } from '../../redux/modal/slice';
import { selectDeleteId } from '../../redux/modal/selectors';
import { deleteContact } from '../../redux/contacts/operations';

const ModalConfirmDelete = () => {
  const dispatch = useDispatch();
  const id = useSelector(selectDeleteId);

  const handleDelete = id => {
    dispatch(deleteContact(id));
    dispatch(closeDeleteModal());
  };

  return (
    <div className={s.backdrop}>
      <div className={s.wrapper}>
        <h1 className={s.title}>
          Are you sure you want to delete this contact?
        </h1>
        <p className={s.text}>This action cannot be undone!</p>
        <button
          type="button"
          className={s.closeBtn}
          onClick={() => dispatch(closeDeleteModal())}
        >
          X
        </button>
        <button
          type="button"
          className={s.deleteBtn}
          onClick={() => handleDelete(id)}
        >
          Yes, Delete
        </button>
      </div>
    </div>
  );
};

export default ModalConfirmDelete;
