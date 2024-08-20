import s from './Loader.module.css';
import { FallingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.loader}>
        <FallingLines
          color="#c0392b"
          width="100"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      </div>
    </div>
  );
};

export default Loader;
