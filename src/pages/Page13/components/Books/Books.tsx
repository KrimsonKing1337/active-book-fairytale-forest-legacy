import { nanoid } from 'nanoid';

import { Img } from 'activeBook-core/components';

import { getShuffledImages } from './utils';

import styles from './Books.scss';

export const Books = () => {
  const images = getShuffledImages();

  return (
    <div className={styles.wrapper}>
      {images.map((imageCur) => {
        const uuid = nanoid();

        return (
          <div key={uuid} className={styles.bookWrapper}>
            <Img src={imageCur} className={styles.book} />
          </div>
        );
      })}
    </div>
  );
};
