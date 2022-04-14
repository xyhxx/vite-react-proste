import icon from '@assets/images/logo.svg';

import css from './index.module.scss';

import { FC, useState } from 'react';

const Home: FC = function () {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src={icon} className={css['icon']} />
      <h1 className={css['title']} data-testid='title'>
        count is {count}
      </h1>
      <div className={css['btn-group']}>
        <button onClick={() => setCount(val => val + 1)} data-testid='increment'>
          increment
        </button>
        <button onClick={() => setCount(val => val - 1)} data-testid='reduce'>
          reduce
        </button>
      </div>
    </>
  );
};

export default Home;
