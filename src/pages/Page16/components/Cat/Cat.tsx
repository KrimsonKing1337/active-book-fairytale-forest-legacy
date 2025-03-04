import { useEffect, useState } from 'react';

import classNames from 'classnames';
import { Img } from 'activeBook-core/components';

import type { Interval } from 'activeBook-core/@types';

import styles from './Cat.scss';

export type CatProps = {
  isActive: boolean;
};

let interval: Interval = null;

export const Cat = ({ isActive }: CatProps) => {
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    /*
    эта переменная нужна, чтобы isReversed не добавлять в зависимости
    и не перезапускать таймер каждый раз при её изменении
    */
    let isReversedLocal = false;

    interval = setInterval(() => {
      setIsReversed(!isReversedLocal);

      isReversedLocal = !isReversedLocal;
    }, 5000); // время анимации

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  const wrapperClassNames = classNames({
    [styles.wrapper]: true,
    [styles.isActive]: isActive,
  });

  const imgClassNames = classNames({
    [styles.img]: true,
    [styles.isActive]: isActive,
    [styles.isReversed]: isReversed,
  });

  return (
    <span className={wrapperClassNames}>
      <Img src="/assets/book_data/images/cat.svg" className={imgClassNames} />
    </span>
  );
};
