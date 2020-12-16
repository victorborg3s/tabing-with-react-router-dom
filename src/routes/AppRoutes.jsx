import React from 'react';
import { Route } from 'react-router-dom';
import { HomePage } from '../pages';

function AppRoutes({ addTab }) {
  const createNewTab = (history) => {
    return (tabTitle, tabUrl) => {
      addTab(tabTitle, tabUrl);
      history.push(tabUrl);
    };
  };
  return [
    <Route exact path="/" render={({ history }) => (
      <HomePage createNewTab={createNewTab(history)} />
    )} />,
    <Route exact path="/products">
      <article>this is Products page</article>
    </Route>,
    <Route exact path="/help">
      <article>this is Help page</article>
    </Route>,
  ];
}

export default AppRoutes;
