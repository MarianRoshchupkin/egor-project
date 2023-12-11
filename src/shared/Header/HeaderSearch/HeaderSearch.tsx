import React from 'react';
import styles from './headersearch.module.css';
import BasketImg from '../../../assets/images/basket.png';
import LoginImg from '../../../assets/images/login.png';
import SupportImg from '../../../assets/images/support.png';
import SearchImg from '../../../assets/images/search.png';

export function HeaderSearch() {
  return (
    <div className={styles.container}>
      <div className={styles.catalog}>
        <span className={styles.catalogDesc}>Алексангрия</span>
        <button className={styles.catalogButton}>
          <span className={styles.catalogButtonDesc}>Каталог</span>
        </button>
      </div>
      <div className={styles.search}>
        <input className={styles.searchInput} type="text" placeholder="Поиск по сайту" />
        <button className={styles.searchImg}><img src={SearchImg} alt="Лупа" /></button>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>
          <span className={styles.buttonImg}><img src={BasketImg} alt="Корзина" /></span>
          <span className={styles.buttonDesc}>Корзина</span>
        </button>
        <button className={styles.button}>
          <span className={styles.buttonImg}><img src={LoginImg} alt="Лоигн" /></span>
          <span className={styles.buttonDesc}>Вход</span>
        </button>
        <button className={styles.button}>
          <span className={styles.buttonImg}><img src={SupportImg} alt="Поддержка" /></span>
          <span className={styles.buttonDesc}>Помощь</span>
        </button>
      </div>
    </div>
  );
}
