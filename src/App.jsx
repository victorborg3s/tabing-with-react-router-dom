import React, { useState } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import AppRoutes from './routes';

import './App.css';

function App() {
  const [tabs, setTabs] = useState([{
    url: '/',
    title: 'Home',
  }]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tabing with react-router-dom</h1>
      </header>
      <BrowserRouter>
        <nav className="tabs">
          <ul>
            {
              tabs.map(tab => (
                <li><NavLink exact to={tab.url} activeClassName="active">{tab.title}</NavLink></li>
              ))
            }
          </ul>
        </nav>
        <AppRoutes
          addTab={(tabTitle, tabUrl) => setTabs([...tabs, { title: tabTitle, url: tabUrl }])}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
