import { useEffect, useRef } from 'react';

import { Img } from 'activeBook-core/components';

import classNames from 'classnames';

import { initCircleType } from './utils';

import styles from './Cat.scss';

export type HedgehogProps = {
  isActive: boolean;
};

export const Cat = ({ isActive }: HedgehogProps) => {
  const elementRef1 = useRef<HTMLSpanElement>(null);
  const elementRef2 = useRef<HTMLSpanElement>(null);

  const circleTypeRef1 = useRef<any>();
  const circleTypeRef2 = useRef<any>();

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
    [styles.wrapper]: true,
    [styles.isActive]: isActive,
  });

  const imgClassNames = classNames({
    [styles.img]: true,
    [styles.isActive]: isActive,
  });

  return (
    <span className={wrapperClassNames}>
      <span ref={elementRef1} className={styles.curve}>
        Ёжик Фыр-Фыр ждёт нас.&nbsp;
      </span>

      <Img src="/assets/book_data/images/cat2.svg" className={imgClassNames} />

      <span ref={elementRef2} className={styles.curve}>
        Он вчера сказал, что
      </span>
    </span>
  );
};
