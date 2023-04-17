import icon from '@assets/images/logo.svg';
import css from './index.module.css';
import {FC} from 'react';
import {countState} from '@stores';
import cla from 'classnames';
import {useStoreSelector} from '@hooks';

const Home: FC = function () {
  const {count, inc, dec} = useStoreSelector(countState);

  return (
    <>
      <img src={icon} className={css.icon} />
      <h1 className={cla([css.title, css.name, {[css.titleRed]: count >= 5}])}>
        React
      </h1>
      <h2 className={css.title} data-testid='title'>
        count is {count}
      </h2>
      <div className={css.btnGroup}>
        <button onClick={inc} data-testid='increment'>
          increment
        </button>
        <button onClick={dec} data-testid='reduce'>
          reduce
        </button>
      </div>
    </>
  );
};

export default Home;
