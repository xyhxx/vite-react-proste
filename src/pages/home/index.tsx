import icon from '@assets/images/logo.svg';

import css from './index.module.scss';

import {useClassNames} from 'react-hook-classnames';
import {FC} from 'react';
import {useCount} from '@stores';
import shallow from 'zustand/shallow';
import {useMeta} from 'use-meta-route';

const Home: FC = function () {
  const [style, cla] = useClassNames({styleSheet: css, camelTransition: '-'});
  const {count, inc, dec} = useCount(state => state, shallow);
  const {title} = useMeta<{title: string}>();

  return (
    <>
      <img src={icon} className={style.icon} />
      <h1 className={cla([style.title, style.name, {[style.titleRed]: count >= 5}])}>{title}</h1>
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
