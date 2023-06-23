import '@styles/index.css';

import routes from '@routes';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {QueryClientProvider} from '@tanstack/react-query';
import {StrictMode} from 'react';
import {QUERY_CLIENT} from '@utils';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <QueryClientProvider client={QUERY_CLIENT}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </StrictMode>,
);
