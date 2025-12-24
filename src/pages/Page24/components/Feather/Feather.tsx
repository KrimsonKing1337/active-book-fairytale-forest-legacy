import { Img } from 'activeBook-core/components';

import * as styles from './Feather.scss';

export const Feather = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ImgWrapper}>
        <Img src="./assets/book_data/images/feather.svg" className={styles.img} />
      </div>
    </div>
  );
};
