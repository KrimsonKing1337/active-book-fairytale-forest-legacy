import { useEffect, useRef } from 'react';

import { Img } from 'activeBook-core/components';

import CircleType from 'circletype';

import styles from './Hedgehog.scss';

export const Hedgehog = () => {
  const ref1 = useRef<HTMLSpanElement>(null);
  const ref2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref1.current) {
      const circleType = new CircleType(ref1.current);

      circleType.radius(200);
    }

    if (ref2.current) {
      const circleType = new CircleType(ref2.current);

      circleType.radius(200).dir(-1);
    }
  }, [ref1, ref2]);

  return (
    <span className={styles.wrapper}>
      <span ref={ref1} className={styles.curve}>
        Ёжик Фыр-Фыр ждёт нас.
      </span>

      <Img src="/assets/book_data/images/hedgehog.svg" className={styles.img} />

      <span ref={ref2} className={styles.curve}>
        Он вчера сказал, что
      </span>
    </span>
  );
};
