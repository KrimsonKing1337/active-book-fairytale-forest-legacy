import { Img } from 'activeBook-core/components';

import styles from './Feather.scss';

export const Feather = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <Img src="/assets/book_data/images/feather.svg" className={styles.img} />
      </div>
    </div>
  );
};
