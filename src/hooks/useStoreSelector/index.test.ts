import {act, renderHook} from '@testing-library/react';
import {useStoreSelector} from '.';
import {createStore} from 'zustand';
import {describe, it, expect} from 'vitest';

type State = {name: string; age: number};
type Action = {dispatch: (state: Partial<State>) => void};

function setup() {
  const demoStore = createStore<State & Action>(function (set) {
    return {
      name: 'simon',
      age: 12,
      dispatch(state) {
        set(state);
      },
    };
  });

  return demoStore;
}

describe('useStoreSelector', function () {
  it('useStoreSelector is defined', function () {
    expect(useStoreSelector).toBeDefined();
    expect(useStoreSelector).toBeInstanceOf(Function);
  });

  it('result', function () {
    const store = setup();

    const {result} = renderHook(() => useStoreSelector(store, state => state));

    expect(result.current.name).toBe('simon');
    expect(result.current.age).toBe(12);
    expect(result.current.dispatch).toBeInstanceOf(Function);
  });

  it('memo state', function () {
    const store = setup();
    const {result: result1} = renderHook(() =>
      useStoreSelector(store, state => ({name: state.name})),
    );
    const {result: result2} = renderHook(() =>
      useStoreSelector(store, state => state.dispatch),
    );

    const prevResult = result1.current;

    expect(result1.current).toEqual({name: 'simon'});

    act(() => result2.current({age: 99}));
    expect(result1.current).toBe(prevResult);

    act(() => result2.current({name: 'david'}));
    expect(result1.current).not.toBe(prevResult);
    expect(result1.current).toEqual({name: 'david'});
  });
});
