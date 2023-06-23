import icon from '@assets/images/logo.svg';
import css from './index.module.css';
import cla from 'classnames';
import {FC} from 'react';
import {countState} from '@stores';
import {useStoreSelector} from '@hooks';

const Home: FC = function() {
  const {count, inc, dec} = useStoreSelector(countState);

  return (
    <>
      <img src={icon} className={css.icon} />
      <h1 className={cla([css.title, css.name, {[css.titleRed]: count >= 5}])}>
        React
      </h1>
      <h2 className={css.title} data-testid="title" id="title">
        count is {count}
      </h2>
      <div className={css.btnGroup}>
        <button onClick={inc} data-testid="inc_btn" id="inc_btn">
          increment
        </button>
        <button onClick={dec} data-testid="dec_btn" id="dec_btn">
          decrease
        </button>
      </div>
    </>
  );
};

export default Home;
