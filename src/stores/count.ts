import create from 'zustand';
import {devtools} from 'zustand/middleware';
import type {ZustandDevtools} from '.';

type State = {
  count: number;
};

type Action = {
  inc: () => void;
  dec: () => void;
};

export const useCount = create<State & Action, ZustandDevtools>(
  devtools(function(set) {
    return {
      count: 0,
      inc() {
        set(val => ({count: val.count + 1}), false, 'inc');
      },
      dec() {
        set(val => ({count: val.count - 1}), false, 'dec');
      },
    };
  }),
);
