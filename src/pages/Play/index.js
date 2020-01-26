import React from 'react';
import Aside from '../../components/Play/Aside';
import Center from '../../components/Play/Center';

import './styles.css';

export default function Play() {

  const classBG = ["green", "blue"];

  function createImg() {
    const vet = [1, 2, 3, 4, 5, 6, 10];
    return (
      vet.map(index => {
        return (
          <header key={index} className="icon">
            <img src="https://s1.1zoom.me/big0/924/412182-blackangel.jpg"></img>
            <a>{index}</a>
          </header>
        )
      })
    )
  }
  return (
    <div className="container">
      <Aside bg={classBG[0]}>

        {createImg()}

      </Aside>
      <Center />
      <Aside bg={classBG[1]}>
      </Aside>

    </div>
  )
}