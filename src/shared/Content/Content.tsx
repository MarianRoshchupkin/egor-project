import React from 'react';
import styles from './content.module.css';
import Cognac from '../../assets/images/cognac.png';
import Whisky from '../../assets/images/whisky.png';
import Moonshine from '../../assets/images/moonshine.png';
import Liqueur from '../../assets/images/liqueur.png';
import {Card} from "./Card";

export interface ICharacteristic {
  region?: string;
  vendor?: string;
  brand?: string;
  proof?: string;
  type?: string;
  years?: string;
  caskYears?: string;
  vintage?: string;
  style?: string;
  size?: string;
}

interface IElement {
  image: HTMLImageElement;
  title: string;
  desc: string;
  characteristic: ICharacteristic;
  number: string;
}

const elements: IElement[] = [
  {
    image: Cognac,
    title: "Коньяк Delamain, Vintage 1996, 0.7 л.",
    desc: "Деламейн, Винтаж 1986, в подарочной коробке, 700 мл",
    characteristic: {
      region: "Франция, Коньяк, Гранд Шампань",
      vendor: "Delamain",
      brand: "Delamain",
      vintage: "1986",
      years: "30 лет"
    },
    number: "71 780"
  },
  {
    image: Whisky,
    title: "Виски \"Glenfiddich\" Grande Couronne 26 Years Old, gift box, 0.7 л.",
    desc: "\"Гленфиддик\" Гранд Курон 26-летний, в подарочной коробке, 700 мл.",
    characteristic: {
      region: "Шотландия, Хайленд (Высокогорье)",
      vendor: "Glenfiddich",
      proof: "43.8%",
      type: "Односолодовый",
      years: "26 лет",
      caskYears: "Американский дуб, европейский дуб, из-под коньяка."
    },
    number: "93 955"
  },
  {
    image: Moonshine,
    title: "Самогон Raichikhinsk's Moonshine DeluxeEdition 1895, 0,97 л.",
    desc: "Райчихинск Муншайн 128-летний, в подарочной ленточке, 970 мл.",
    characteristic: {
      region: "Россия, Самогон, Гранд Райчихинск",
      vendor: "Xamle",
      brand: "Raichikhinsk",
      vintage: "1895",
      years: "128 лет"
    },
    number: "350 599"
  },
  {
    image: Liqueur,
    title: "Ликёр \"Sheridan's\", 0.7 л.",
    desc: "Ликёр \"Sheridan's\", 0.7 л.",
    characteristic: {
      region: "Ирландия",
      brand: "Sheridan's",
      proof: "15.5%",
      vendor: "Sheridan's",
      style: "Крем-ликёр",
      size: "0.7 л"
    },
    number: "93 955"
  }
];

export function Content() {
  return (
    <section className={styles.content}>
      <div className={styles.container}>
        <h4 className={styles.title}>Каталог товаров</h4>
        {elements.map((element) =>
          <Card
            image={element.image}
            title={element.title}
            desc={element.desc}
            characteristic={element.characteristic}
            number={element.number}
            key={element.title}
          />
        )}
      </div>
    </section>
  );
}
