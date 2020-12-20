import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { Tabs } from './components';

import './App.css';

function App() {
  const [tabs, setTabs] = useState([{
    url: '/',
    title: 'Home',
  }]);
  const addTab = (tabTitle, tabUrl) => {
    const tabIndex = tabs.findIndex((tab) => tab.url === tabUrl);
    if (tabIndex === -1) {
      setTabs([...tabs, { title: tabTitle, url: tabUrl }]);
    }
  };
  const closeTabByUrl = (history, tabUrl) => {
    const indexToRemove = tabs.findIndex((tab) => tab.url === tabUrl);
    if (indexToRemove > -1) {
      const modifiedTabs = [...tabs];
      modifiedTabs.splice(indexToRemove, 1);
      setTabs(modifiedTabs);
      if (tabUrl === history.location.pathname) {
        history.push('/');
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tabing with react-router-dom</h1>
      </header>
      <BrowserRouter>
        <Tabs tabs={tabs} closeTabByUrl={closeTabByUrl} />
        <AppRoutes
          tabs={tabs}
          addTab={addTab}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
