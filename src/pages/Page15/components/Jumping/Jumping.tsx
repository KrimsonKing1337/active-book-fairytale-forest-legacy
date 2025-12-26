import classNames from 'classnames';

import * as styles from './Jumping.scss';

export type JumpingProps = {
  isActive: boolean;
};

export const Jumping = ({ isActive }: JumpingProps) => {
  const classNamesWrapper = classNames({
    [styles.Wrapper]: true,
    [styles.isActive]: isActive,
  });

  return (
    <span className={classNamesWrapper}>
      Зайчонок Прыг-Прыг скакал вперед.&nbsp;
    </span>
  );
};
