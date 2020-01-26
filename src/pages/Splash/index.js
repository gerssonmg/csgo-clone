import React from 'react';
import { Link } from 'react-router-dom';


export default function Splash() {
  return (
    <div>
      <Link to="play" >
        <button>Play</button>
      </Link>
    </div>
  )
}