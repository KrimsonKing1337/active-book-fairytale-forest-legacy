import { Img } from 'activeBook-core/components';

import { nanoid } from 'nanoid';

import styles from './Carrots.scss';

export const Carrots = () => {
  return (
    <div className={styles.wrapper}>
      {[...Array(10)].map(() => {
        const uuid = nanoid();

        return (
          <Img key={uuid} src="/assets/book_data/images/carrot.svg" className={styles.carrot} />
        );
      })}
    </div>
  );
};
