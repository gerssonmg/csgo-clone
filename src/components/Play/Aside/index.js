import React from 'react';
import './styles.css';

export default function Aside({ bg }) {

  function lineRender(index) {

    if (index === 1 || index === 3) {
      return (
        <div className="border-button">
        </div>
      )
    }
  }
  function createImg() {
    const vet = [1, 2, 3, 4, 5, 6];
    return (
      vet.map(index => {
        return (
          <>
            <header key={index} className="icon top">
              <img alt="icone" src="https://s1.1zoom.me/big0/924/412182-blackangel.jpg"></img>
            </header>
            <>
              {
                lineRender(index)
              }
            </>
          </>
        )
      })
    )
  }

  function renderRoot() {
    if (bg === 'grey-left') {
      return (
        <>
          <div className="container-top">
            {createImg()}
          </div>
          <div className="container-button">
            <header className="icon button">
              <img alt="icone" src="https://s1.1zoom.me/big0/924/412182-blackangel.jpg"></img>
            </header>
          </div>
        </>
      )
    }
  }
  return (
    <aside className={`aside ${bg}`}>

      {renderRoot()}

    </aside>
  );
}