import { Img } from 'activeBook-core/components';

import styles from './Flowers.scss';

export const Flowers = () => {
  return (
    <div>
      <Img src="/assets/book_data/images/flowers/without-stem/1.svg" className={styles.withoutStem1} />
      <Img src="/assets/book_data/images/flowers/without-stem/2.svg" className={styles.withoutStem2} />
      <Img src="/assets/book_data/images/flowers/without-stem/3.svg" className={styles.withoutStem3} />

      <Img src="/assets/book_data/images/flowers/with-stem/1.svg" className={styles.withStem1} />
      <Img src="/assets/book_data/images/flowers/with-stem/2.svg" className={styles.withStem2} />
      <Img src="/assets/book_data/images/flowers/with-stem/3.svg" className={styles.withStem3} />
    </div>
  );
};
