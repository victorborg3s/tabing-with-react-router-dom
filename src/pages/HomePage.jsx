import React from 'react';

function HomePage({ createNewTab }) {
  return (
    <article>
      <button type="button" onClick={
        () => createNewTab('Products', '/products')
      }>
        Open Products tab
      </button>
      <button type="button" onClick={
        () => createNewTab('Help', '/help')
      }>
        Open Help tab
      </button>
    </article>
  );
}

export default HomePage;
