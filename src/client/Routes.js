import React from 'react';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import UsersListPage from './pages/UsersListPage';
import App from './App';
import AdminsListPage from './pages/AdminsListPage';


export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...NotFound
      }
    ]
  }
];
