import React from 'react';
import './styles.css';

export default function Aside({ children, bg }) {

  function createImg() {
    const vet = [1, 2, 3, 4, 5, 6];
    return (
      vet.map(index => {
        return (
          <header key={index} className="icon top">
            <img src="https://s1.1zoom.me/big0/924/412182-blackangel.jpg"></img>

          </header>
        )
      })
    )
  }
  return (
    <aside className={`aside ${bg}`}>
      {children}

      <div className="container-top">
        {createImg()}
      </div>

      <div className="container-button">
        <header className="icon button">
          <img src="https://s1.1zoom.me/big0/924/412182-blackangel.jpg"></img>
        </header>
      </div>

    </aside>
  );
}