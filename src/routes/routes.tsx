import {FC} from 'react';
import {Home} from '@pages';
import {HOME_PATH} from './name';
import {RouteMetaObject, useMetaRoutes} from 'use-meta-route';

const routes: RouteMetaObject[] = [
  {path: HOME_PATH, element: <Home />, meta: {title: 'vite-react-proste'}},
];
const PrivateRoutes: FC = function () {
  const Routes = useMetaRoutes({routes});

  return Routes;
};

export default PrivateRoutes;
