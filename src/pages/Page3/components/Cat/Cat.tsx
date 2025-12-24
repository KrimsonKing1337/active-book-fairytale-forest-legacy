import { useEffect, useRef } from 'react';

import classNames from 'classnames';

import { Img } from 'activeBook-core/components';

import { initCircleType } from './utils';

import * as styles from './Cat.scss';

export type HedgehogProps = {
  isActive: boolean;
};

export const Cat = ({ isActive }: HedgehogProps) => {
  const elementRef1 = useRef<HTMLSpanElement | null>(null);
  const elementRef2 = useRef<HTMLSpanElement | null>(null);

  const circleTypeRef1 = useRef<any>(null);
  const circleTypeRef2 = useRef<any>(null);

  useEffect(() => {
    initCircleType({
      elementRef: elementRef1,
      circleTypeRef: circleTypeRef1,
      reverse: false,
      isActive: isActive,
    });

    initCircleType({
      elementRef: elementRef2,
      circleTypeRef: circleTypeRef2,
      reverse: true,
      isActive: isActive,
    });
  }, [isActive]);

  const wrapperClassNames = classNames({
    [styles.Wrapper]: true,
    [styles.isActive]: isActive,
  });

  const imgClassNames = classNames({
    [styles.Img]: true,
    [styles.isActive]: isActive,
  });

  return (
    <span className={wrapperClassNames}>
      <span ref={elementRef1} className={styles.Curve}>
        Ёжик Фыр-Фыр ждёт нас.&nbsp;
      </span>

      <Img src="./assets/book_data/images/cat.svg" className={imgClassNames} />

      <span ref={elementRef2} className={styles.Curve}>
        Он вчера сказал, что
      </span>
    </span>
  );
};
