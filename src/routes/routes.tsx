import { FC } from 'react';
import { Home } from '@pages';
import { useRoutes } from 'react-router-dom';
import { HOME_PAGE } from './name';

const PrivateRoutes: FC = function () {
  const Routes = useRoutes([{ path: HOME_PAGE, element: <Home /> }]);

  return Routes;
};

export default PrivateRoutes;
