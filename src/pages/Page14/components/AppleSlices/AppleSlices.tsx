import { nanoid } from 'nanoid';

import { Img } from 'activeBook-core/components';

import { getShuffledImages } from './utils';

import * as styles from './AppleSlices.scss';

export const AppleSlices = () => {
  const images = getShuffledImages();

  return (
    <div className={styles.wrapper}>
      {images.map((imageCur) => {
        const uuid = nanoid();

        return (
          <Img key={uuid} src={imageCur} className={styles.slice} />
        );
      })}
    </div>
  );
};
