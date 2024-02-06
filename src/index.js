import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/GlobalStyles';
import MyRoutes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRoutes />
    <GlobalStyles />
  </React.StrictMode>
);

