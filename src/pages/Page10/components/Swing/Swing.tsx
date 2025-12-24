import classNames from 'classnames';

import * as styles from './Swing.scss';

export type SwingProps = {
  isActive: boolean;
};

export const Swing = ({ isActive }: SwingProps) => {
  const swingClassNames = classNames({
    [styles.Swing]: true,
    [styles.isActive]: isActive,
  });

  return (
    <span className={swingClassNames}>
      &nbsp;раскачиваясь из стороны в сторону,&nbsp;
    </span>
  );
};
