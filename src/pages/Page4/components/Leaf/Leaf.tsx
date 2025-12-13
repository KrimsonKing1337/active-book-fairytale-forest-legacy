import { Img } from 'activeBook-core/components';

import styles from './Leaf.scss';

export const Leaf = () => {
  return (
    <div className={styles.leaf}>
      <Img src="./assets/book_data/images/leaf.svg" />
    </div>
  );
};
