import React from 'react';

function HomePage({ createNewTab }) {
  return (
    <article>
      <button type="button" onClick={
        () => createNewTab({ url: '/products', title: 'Products' })
      }>
        Open Products tab
      </button>
      <button type="button" onClick={
        () => createNewTab({ url: '/help', title: 'Help' })
      }>
        Open Help tab
      </button>
    </article>
  );
}

export default HomePage;
