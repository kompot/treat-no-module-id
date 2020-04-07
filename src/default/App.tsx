import React from 'react';

import Route1 from 'frontm/routes/Route1';
import Route2 from 'frontm/routes/Route2';
import Route3 from 'frontm/routes/Route3';

import { Provider } from 'frontm/components/ui/Provider'
// const Route1 = React.lazy(() => import('frontm/routes/Route1'));
// const Route2 = React.lazy(() => import('frontm/routes/Route2'));
// const Route3 = React.lazy(() => import('frontm/routes/Route3'));

export const App: React.FC = () => {
  return (
    <Provider>
      <>
        <Route1 />
        <Route2 />
        <Route3 />
      </>
    </Provider>
  );
};
