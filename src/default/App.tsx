import React from 'react';

const Route1 = React.lazy(() => import('frontm/routes/Route1'));
const Route2 = React.lazy(() => import('frontm/routes/Route2'));
const Route3 = React.lazy(() => import('frontm/routes/Route3'));

export const App: React.FC = () => {
  return (
      <>
        <Route1 />
        <Route2 />
        <Route3 />
      </>
  );
};
