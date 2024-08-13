import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const filterValue = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  return (
    <label className={s.wrapper}>
      <p className={s.label}>Find contact by name</p>
      <input
        className={s.searchInput}
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
