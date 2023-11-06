import {equal} from '@utils';
import {createWithEqualityFn} from 'zustand/traditional';

type State = {
  count: number;
};

type Action = {
  inc: () => void;
  dec: () => void;
};

export const useCountState = createWithEqualityFn<State & Action>(function (
  set,
) {
  return {
    count: 0,
    inc() {
      set(function ({count}) {
        return {
          count: process.env.IS_E2E ? count + 2 : count + 1,
        };
      }, false);
    },
    dec() {
      set(function ({count}) {
        return {
          count: process.env.IS_E2E ? count - 2 : count - 1,
        };
      }, false);
    },
  };
}, equal);
