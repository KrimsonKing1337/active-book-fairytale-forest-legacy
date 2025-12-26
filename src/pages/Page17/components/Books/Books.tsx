import { nanoid } from 'nanoid';

import { Img } from 'activeBook-core/components';

import { getShuffledImages } from './utils';

import * as styles from './Books.scss';

export const Books = () => {
  const images = getShuffledImages();

  return (
    <div className={styles.Wrapper}>
      {images.map((imageCur) => {
        const uuid = nanoid();

        return (
          <div key={uuid} className={styles.BookWrapper}>
            <Img src={imageCur} className={styles.Book} />
          </div>
        );
      })}
    </div>
  );
};
