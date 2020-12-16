import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

function Tabs({ tabs, closeTabByUrl }) {
  const history = useHistory();
  const location = useLocation();

  return (
    <nav className="tabs">
      <ul>
        {
          tabs.map((tab) => (
            <li
              key={tab.url}
              className={
                location.pathname === tab.url
                ? 'active'
                : 'inactive'
              }
            >
              <NavLink exact to={tab.url}>
                {tab.title}
              </NavLink>
              <button type="button" className="close" onClick={() => {
                closeTabByUrl(history, tab.url);
              }}>
                <span className="sr-only">close</span>
              </button>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Tabs;
