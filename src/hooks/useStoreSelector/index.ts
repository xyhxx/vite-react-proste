import {shallowEqual} from '@utils';
import {StoreApi, useStore} from 'zustand';

type ExtractState<S> = S extends {
  getState: () => infer T;
}
  ? T
  : never;

type WithReact<S extends StoreApi<unknown>> = S & {
  getServerState?: () => ExtractState<S>;
};

export function useStoreSelector<
  A extends WithReact<StoreApi<unknown>>,
  R = ExtractState<A>,
>(api: A, selector?: (state: ExtractState<A>) => R): R {
  return useStore(api, selector ?? (api.getState as any), shallowEqual);
}
