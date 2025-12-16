import { nanoid } from 'nanoid';

import * as styles from './Blinks.scss';

export const Blinks = () => {
  return (
    <div className={styles.blinkWrapper}>
      {[...Array(5)].map(() => {
        const uuid = nanoid();

        return (
          <div key={uuid} className={styles.blink} />
        );
      })}
    </div>
  );
};
