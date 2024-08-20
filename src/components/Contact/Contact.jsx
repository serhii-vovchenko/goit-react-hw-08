import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { FaUserLarge, FaPhone } from 'react-icons/fa6';
import { openDeleteModal, openModal } from '../../redux/modal/slice';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.wrapper}>
      <div className={s.userData}>
        <h3 className={s.userName}>
          <span className={s.icon}>
            <FaUserLarge size="18" color="#3498db" />
          </span>
          {name}
        </h3>
        <p className={s.userPhone}>
          <span className={s.icon}>
            <FaPhone size="18" color="#2ecc71" />
          </span>
          {number}
        </p>
      </div>
      <div className={s.btnWrapper}>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(openModal({ id, name, number }))}
        >
          Edit
        </button>
        <button
          className={s.deleteBtn}
          type="button"
          onClick={() => dispatch(openDeleteModal(id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
