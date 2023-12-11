import React from 'react';
import styles from './header.module.css';
import {HeaderNavigation} from "./HeaderNavigation";
import {HeaderSearch} from "./HeaderSearch";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderNavigation />
        <HeaderSearch />
      </div>
    </header>
  );
}
