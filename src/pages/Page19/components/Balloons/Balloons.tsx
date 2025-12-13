import { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';

import type { Interval } from 'activeBook-core/@types';

import BalloonIcon from 'assets/book_data/images/balloon.svg';

import { getShuffledFills } from './utils';

import styles from './Balloons.scss';

let interval: Interval = null;

export const Balloons = () => {
  const fillsDefault = getShuffledFills();

  const [fills, setFills] = useState<string[]>(fillsDefault);

  useEffect(() => {
    interval = setInterval(() => {
      const newFills = getShuffledFills();

      setFills(newFills);
    }, 12500);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {fills.map((fillCur) => {
        const uuid = nanoid();

        return (
          <BalloonIcon key={uuid} className={styles.balloon} style={{ fill: fillCur }} />
        );
      })}
    </div>
  );
};
