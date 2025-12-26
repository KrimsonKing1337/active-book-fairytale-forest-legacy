import { useEffect, useState } from 'react';

import classNames from 'classnames';

import TeaCupIcon from 'assets/book_data/images/tea/tea-cup.svg';
import TeapotIcon from 'assets/book_data/images/tea/teapot.svg';
import SmokeIcon from 'assets/book_data/images/tea/smoke.svg';

import { getShuffledFills } from './utils';

import * as styles from './Tea.scss';

export type TeaProps = {
  isActive: boolean;
};

export const Tea = ({ isActive }: TeaProps) => {
  const fillsDefault = getShuffledFills();

  const [fills, setFills] = useState<string[]>(fillsDefault);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const newFills = getShuffledFills();

    setFills(newFills);
  }, [isActive]);

  const wrapperClassNames = classNames({
    [styles.Wrapper]: true,
    [styles.isActive]: isActive,
  });

  return (
    <div className={wrapperClassNames}>
      <div className={styles.TeaIconWrapper}>
        <SmokeIcon className={styles.Smoke} />
        <TeaCupIcon className={styles.TeaIcon} style={{ fill: fills[0] }} />
      </div>

      <div className={styles.TeaIconWrapper}>
        <SmokeIcon className={styles.Smoke} />
        <TeaCupIcon className={styles.TeaIcon} style={{ fill: fills[1] }} />
      </div>

      <TeapotIcon className={styles.TeapotIcon} style={{ fill: fills[2] }} />

      <div className={styles.TeaIconWrapper}>
        <SmokeIcon className={styles.Smoke} />
        <TeaCupIcon className={styles.TeaIcon} style={{ fill: fills[3] }} />
      </div>

      <div className={styles.TeaIconWrapper}>
        <SmokeIcon className={styles.Smoke} />
        <TeaCupIcon className={styles.TeaIcon} style={{ fill: fills[4] }} />
      </div>
    </div>
  );
};
