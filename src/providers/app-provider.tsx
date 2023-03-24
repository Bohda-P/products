import React, { PropsWithChildren } from 'react';
// Store Provider
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// Store
import store from '../store/store';

export const AppProviders: React.FC<PropsWithChildren> = ({ children }) => (
  <StoreProvider store={store}>
    <Router>{children}</Router>
  </StoreProvider>
);
