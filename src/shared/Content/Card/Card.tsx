import React from 'react';
import styles from './card.module.css';
import {ICharacteristic} from "../Content";

interface ICardProps {
  image: HTMLImageElement;
  title: string;
  desc: string;
  characteristic: ICharacteristic;
  number: string;
}

export function Card({ image, title, desc, characteristic, number }: ICardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <ul className={styles.list}>
          {characteristic.region &&
            <li className={styles.item}>
              <span className={styles.name}>Регион:</span>
              &nbsp;
              <span className={styles.value}>{characteristic.region}</span>
            </li>
          }
          {characteristic.vendor &&
            <li className={styles.item}>
              <span className={styles.name}>Производитель:</span>
              &nbsp;
              <span className={styles.value}>{characteristic.vendor}</span>
            </li>
          }
          {characteristic.brand &&
            <li className={styles.item}>
              <span className={styles.name}>Бренд:</span>
              &nbsp;
              <span className={styles.value}>{characteristic.brand}</span>
            </li>
          }
          {characteristic.proof &&
            <li className={styles.item}>
              <span className={styles.name}>Крепость:</span>
              &nbsp;
              <span className={styles.value}>{characteristic.proof}</span>
            </li>
          }
          {characteristic.type &&
            <li className={styles.item}>
              <span className={styles.name}>Тип:</span>
              &nbsp;
              <span className={styles.value}>{characteristic.type}</span>
            </li>
          }
          {characteristic.years &&
            <li className={styles.item}>
              <span className={styles.name}>Выдержка:</span>
              &nbsp;
              <span className={styles.value}>{characteristic.years}</span>
            </li>
          }
          {characteristic.caskYears &&
            <li className={styles.item}>
              <span className={styles.name}>Выдержка&nbsp;в&nbsp;бочках:</span>
              &nbsp;
              <span className={styles.value}>{characteristic.caskYears}</span>
            </li>
          }
          {characteristic.vintage &&
            <li className={styles.item}>
              <span className={styles.name}>Винтаж:</span>
              &nbsp;
              <span className={styles.value}>{characteristic.vintage}</span>
            </li>
          }
          {characteristic.style &&
            <li className={styles.item}>
              <span className={styles.name}>Стиль:</span>
              &nbsp;
              <span className={styles.value}>{characteristic.style}</span>
            </li>
          }
          {characteristic.size &&
            <li className={styles.item}>
              <span className={styles.name}>Объем:</span>
              &nbsp;
              <span className={styles.value}>{characteristic.size}</span>
            </li>
          }
        </ul>
      </div>
      <div className={styles.cart}>
        <span className={styles.price}>Цена</span>
        <span className={styles.number}>{number} ₽</span>
        <button className={styles.button}>
          <span className={styles.buttonDesc}>В корзину</span>
        </button>
      </div>
    </div>
  );
}
