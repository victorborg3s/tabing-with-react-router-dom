import React, { useEffect, useCallback } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { HomePage } from '../pages';
import getTitleFromPath from './getTitleFromPath';

function AppRoutes({ addTab, tabs }) {
  const { push, location: { pathname } } = useHistory();
  const navigateToTab = useCallback((tabUrl) => {
    addTab(getTitleFromPath(tabUrl), tabUrl);
    push(tabUrl);
  }, [addTab, push]);
  useEffect(() => {
    const tabIndex = tabs.findIndex((tab) => tab.url === pathname);
    if (tabIndex === -1) {
      navigateToTab(pathname);
    }
  }, [pathname, tabs, navigateToTab]);

  return [
    <Route key="/" exact path="/" >
      <HomePage navigateToTab={navigateToTab} />
    </Route>,
    <Route
      key="/products"
      exact path="/products/:type"
      render={({ history, match }) => {
        return (
          <article>this is Products page of type {match.params.type}</article>
        );
      }}
    />,
    <Route key="/help" exact path="/help">
      <article>this is Help page</article>
    </Route>,
  ];
}

export default AppRoutes;
