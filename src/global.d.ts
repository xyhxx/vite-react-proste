import { ReactNode } from 'react';

// 这个类型是为了修改以下的类型错误， react-query升级到4.0之后可以移除
// https://github.com/tannerlinsley/react-query/issues/3476
declare module 'react-query/types/react/QueryClientProvider' {
  interface QueryClientProviderProps {
    children?: ReactNode;
  }
}
