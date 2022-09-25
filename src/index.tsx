import '@styles/index.scss';

import PrivateRoutes from '@routes';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {StrictMode} from 'react';

const queryClient = new QueryClient();

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <PrivateRoutes />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  </StrictMode>,
);
