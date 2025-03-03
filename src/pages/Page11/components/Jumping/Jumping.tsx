import classNames from 'classnames';

import styles from './Jumping.scss';

export type JumpingProps = {
  isActive: boolean;
};

export const Jumping = ({ isActive }: JumpingProps) => {
  const classNamesWrapper = classNames({
    [styles.wrapper]: true,
    [styles.isActive]: isActive,
  });

  return (
    <span className={classNamesWrapper}>
      Зайчонок Прыг-Прыг скакал вперед.&nbsp;
    </span>
  );
};
