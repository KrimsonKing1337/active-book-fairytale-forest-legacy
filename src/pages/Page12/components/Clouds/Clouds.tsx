import { Img } from 'activeBook-core/components';

import { nanoid } from 'nanoid';

import styles from './Clouds.scss';

import { getRandomImage } from './utils';

export const Clouds = () => {
  return (
    <div className={styles.wrapper}>
      {[...Array(10)].map(() => {
        const uuid = nanoid();
        const src = getRandomImage();

        return (
          <Img key={uuid} src={src} className={styles.cloud} />
        );
      })}
    </div>
  );
};
