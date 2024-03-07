import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ element: Element, ...rest }) => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');

  return token ? <Route {...rest} element={<Element />} /> : <Navigate to="/login" />;
};
