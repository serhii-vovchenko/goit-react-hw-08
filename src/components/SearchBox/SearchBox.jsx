import s from './SearchBox.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const filterValue = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      <span>Find contact by name</span>
      <input
        className={s.input}
        type="text"
        value={filterValue}
        onChange={e => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </label>
  );
};

export default SearchBox;
