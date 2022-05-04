import { FC } from 'react';
import { Home } from '@pages';
import { useRoutes } from 'react-router-dom';
import { HOME_PATH } from './name';

const PrivateRoutes: FC = function () {
  const Routes = useRoutes([{ path: HOME_PATH, element: <Home /> }]);

  return Routes;
};

export default PrivateRoutes;
