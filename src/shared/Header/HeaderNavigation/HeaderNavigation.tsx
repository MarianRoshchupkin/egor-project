import React from 'react';
import styles from './headernavigation.module.css';
import MapImg from '../../../assets/images/map.png';

export function HeaderNavigation() {
  return (
    <div className={styles.container}>
      <a className={styles.logo} href="/">
        <span className={styles.logoImg}><img src={MapImg} alt="Указатель" /></span>
        <span className={styles.logoDesc}>Хабаровск</span>
      </a>
      <ul className={styles.list}>
        <li className={styles.item}><a className={styles.link} href="#">Акции</a></li>
        <li className={styles.item}><a className={styles.link} href="#">Магазины</a></li>
        <li className={styles.item}><a className={styles.link} href="#">Покупателям</a></li>
        <li className={styles.item}><a className={styles.link} href="#">Вакансии</a></li>
      </ul>
      <a className={styles.tel} href="tel:89622210719">8-962-221-07-19</a>
    </div>
  );
}
