import classNames from 'classnames';

import Icon from 'assets/book_data/images/fox.svg';

import * as styles from './Fox.scss';

export type FoxProps = {
  isActive: boolean;
};

export const Fox = ({ isActive }: FoxProps) => {
  const wrapperClassNames = classNames({
    [styles.wrapper]: true,
    [styles.isActive]: isActive,
  });

  return (
    <span className={wrapperClassNames}>
      {isActive && (
        <Icon className={styles.icon} />
      )}
    </span>
  );
};
