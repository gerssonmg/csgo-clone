import React from 'react';
import Aside from '../../components/Play/Aside';
import Center from '../../components/Play/Center';

import './styles.css';

export default function Play() {

  const classBG = ["green", "grey"];


  return (
    <div className="container">
      <Aside bg={classBG[0]}>



      </Aside>
      <Center />
      <Aside bg={classBG[1]}>
      </Aside>

    </div>
  )
}