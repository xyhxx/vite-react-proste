import {FC} from 'react';
import {Home} from '@pages';
import {HOME_PATH} from './name';
import {RouteObject, useRoutes} from 'react-router-dom';

const routes: RouteObject[] = [
  {path: HOME_PATH, element: <Home />},
];
const PrivateRoutes: FC = function() {
  const Routes = useRoutes(routes);

  return Routes;
};

export default PrivateRoutes;
