import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import styles from './styles.module.scss';

function Header () {
  const {header, title} = styles;
  return (
    <div className={header}>
      <div className={title}>Retail₽ad</div>
      <div>test</div>
      <NavMenu />
    </div>
  );
}

export default Header;

