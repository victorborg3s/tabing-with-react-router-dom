import React from 'react';

function HomePage({ navigateToTab }) {
  return (
    <article>
      <button type="button" onClick={
        () => navigateToTab('/products/A')
      }>
        Open Products A tab
      </button>
      <button type="button" onClick={
        () => navigateToTab('/products/B')
      }>
        Open Products B tab
      </button>
      <button type="button" onClick={
        () => navigateToTab('/help')
      }>
        Open Help tab
      </button>
    </article>
  );
}

export default HomePage;
