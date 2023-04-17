import {createStore} from 'zustand';

type State = {
  count: number;
};

type Action = {
  inc: () => void;
  dec: () => void;
};

export const countStore = createStore<State & Action>(function (set) {
  return {
    count: 0,
    inc() {
      set(val => ({count: val.count + 1}), false);
    },
    dec() {
      set(val => ({count: val.count - 1}), false);
    },
  };
});
