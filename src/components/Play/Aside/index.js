import React from 'react';
import './styles.css';

export default function Aside({ children, bg }) {
  return (
    <aside className={`aside ${bg}`}>
      {children}
    </aside>
  );
}