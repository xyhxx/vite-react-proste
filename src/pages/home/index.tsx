import icon from '@assets/images/logo.svg';
import css from './index.module.css';
import {useClassNames} from 'react-hook-classnames';
import {FC} from 'react';
import {countState} from '@stores';
import {shallowEqual} from '@utils';
import {useStore} from 'zustand';

const Home: FC = function() {
  const [style, cla] = useClassNames({styleSheet: css, camelTransition: '-'});
  const {count, inc, dec} = useStore(
    countState,
    state => state,
    shallowEqual,
  );

  return (
    <>
      <img src={icon} className={style.icon} />
      <h1 className={cla([style.title, style.name, {[style.titleRed]: count >= 5}])}>React</h1>
      <h2 className={style.title} data-testid='title'>
        count is {count}
      </h2>
      <div className={style.btnGroup}>
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
